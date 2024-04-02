local IS_SERVER = game:GetService("RunService"):IsServer()
local Comm = require(script.Parent.Comm)
local TableUtil = require(script.Parent.TableUtil)

Comm = if IS_SERVER then Comm.ServerComm else Comm.ClientComm

local RemoteComponentExtension = {}

function RemoteComponentExtension.Starting(component)
	local objectInstance = component.Instance
	local nameSpace = component.RemoteNamespace or component.Tag
	if IS_SERVER then
		if component.Client then
			component.Client = TableUtil.Copy(component.Client, true)

			if objectInstance:FindFirstChild(nameSpace) then
				objectInstance[nameSpace]:Destroy()
			end
			component._serverComm = Comm.new(objectInstance, nameSpace)
			for k,v in pairs(component.Client) do
				if type(v) == "function" then
					component._serverComm:WrapMethod(component.Client, k)
				elseif tostring(v) == "SIGNAL_MARKER" then -- Allow Knit.CreateSignal()
					component.Client[k] = component._serverComm:CreateSignal(k)
				elseif type(v) == "table" and tostring(v[1]) == "PROPERTY_MARKER" then
					component.Client[k] = component._serverComm:CreateProperty(k, v[2])
				elseif tostring(v) == "UNRELIABLE_SIGNAL_MARKER" then
					component.Client[k] = component._serverComm:CreateSignal(k, true)
				end
			end
			component.Client.Server = component
		end
	else
		component.Server = Comm.new(objectInstance, component.UsePromisesForMethods, nameSpace):BuildObject()
	end
end

function RemoteComponentExtension.Stopping(component)
	local target = IS_SERVER and "_serverComm" or "_clientComm"
	if component[target] then component[target]:Destroy() end
end

return RemoteComponentExtension