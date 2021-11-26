type AncestorList = {Instance}

type ExtensionFn = (any) -> nil

type Extension = {
	Constructing: ExtensionFn?,
	Constructed: ExtensionFn?,
	Starting: ExtensionFn?,
	Started: ExtensionFn?,
	Stopping: ExtensionFn?,
	Stopped: ExtensionFn?,
}

type ComponentConfig = {
	Tag: string,
	Ancestors: AncestorList?,
	Extensions: {Extension}?,
}

local RemoteComponent = require(script.Component)
local RemoteComponentExtension = require(script.Extension)
local Signal = require(script.Parent.Signal)
local Trove = require(script.Parent.Trove)

local DEFAULT_ANCESTORS = {workspace, game:GetService("Players")}

function RemoteComponent.new(config: ComponentConfig)
    local customComponent = {}
	customComponent.__index = customComponent
	customComponent.__tostring = function()
		return "Component<" .. config.Tag .. ">"
	end
	customComponent._ancestors = config.Ancestors or DEFAULT_ANCESTORS
	customComponent._instancesToComponents = {}
	customComponent._components = {}
	customComponent._trove = Trove.new()
	customComponent._extensions = config.Extensions or {RemoteComponentExtension}
	customComponent._started = false
	customComponent.Tag = config.Tag
	customComponent.Started = customComponent._trove:Construct(Signal)
	customComponent.Stopped = customComponent._trove:Construct(Signal)
	setmetatable(customComponent, RemoteComponent)
	customComponent:_setup()
	return customComponent
end

return RemoteComponent