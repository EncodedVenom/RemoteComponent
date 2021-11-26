local IS_SERVER = game:GetService("RunService"):IsServer()
local Comm = require(script.Parent.Parent.Comm)
local TableUtil = require(script.Parent.Parent.TableUtil)

local RemoteComponentExtension = {}

function RemoteComponentExtension.Starting(component)
	local objectInstance = component.Instance
	if IS_SERVER then
		if component.Client then
			component.Client = TableUtil.Copy(component.Client, true)

			component._serverComm = Comm.ServerComm.new(objectInstance, component.RemoteNamespace)
			for k,v in pairs(component.Client) do
				if type(v) == "function" then
					component._serverComm:WrapMethod(component.Client, k)
				elseif tostring(v) == "SIGNAL_MARKER" then -- Allow Knit.CreateSignal()
					component.Client[k] = component._serverComm:CreateSignal(k)
				end
			end
			component.Client.Server = component
		end
	else
		if not component.RemoteNamespace then return end
		if objectInstance:WaitForChild(component.RemoteNamespace, 5) then
			component.Server = Comm.ClientComm.new(objectInstance, component.UsePromisesForMethods, component.RemoteNamespace):BuildObject()
		end
	end
end

function RemoteComponentExtension.Stopping(component)
	local target = IS_SERVER and "_serverComm" or "_clientComm"
	if component[target] then component[target]:Destroy() end
end

return RemoteComponentExtension
