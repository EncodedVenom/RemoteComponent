# RemoteComponent

A better solution to fix communication across the client-server boundary with regards to [Knit Components](https://sleitnick.github.io/RbxUtil/api/Component)

RemoteComponents are an extension of Components. They exist for one purpose: handling client and server communication for you--without the hassle of another module to learn. They are designed to be very familiar to use and pick up. If you've ever created a Knit Service with client-exposed methods and remotes, you can most certainly use this.

## Example

Here is an example of how a RemoteComponent works.

Server:
```lua
local Component = require(Path.To.Component)
local RemoteComponent = require(Path.To.RemoteComponent)

local ServerComponent = Component.new({Tag="Test",Extensions={RemoteComponent}})
ServerComponent.Client = {
    Signal = Knit.CreateSignal(); -- Can use "SIGNAL_MARKER" instead, but it's advised to use this method.
}

ServerComponent.RemoteNamespace = "RemoteComponentExample"

function ServerComponent:Start()
    self.Client.Signal:Connect(function(Player)
        print(Player.Name .. " has fired the Remote!")
    end)
end

function ServerComponent:ServerLogic()
    return "ReturnedServerLogic"
end

function ServerComponent.Client:Hello(Player, msg)
    print(Player, msg)
    return true
end

function ServerComponent.Client:FunctionInNeedOfServerLogic(Player)
    local ServerLogic = self.Server:ServerLogic()
    -- Other operations
    . . .
    return result
end

return ServerComponent
```

Client:
```lua
local Component = require(Path.To.Component)
local RemoteComponent = require(Path.To.RemoteComponent)

local ClientComponent = Component.new({Tag="Test",Extensions={RemoteComponent}})

ClientComponent.RemoteNamespace = "RemoteComponentExample"

function ClientComponent:Start()
    print(self.Server:Hello("Hey "..self.Instance.Name.."!")) -- -> true
    self.Server.Signal:Fire()
end

return ClientComponent
```

## Installation

Use Wally and add to your wally.toml. The following is the current up-to-date version:
```
RemoteComponent = "encodedvenom/remotecomponent@1.0.3"
```

Alternatively you may copy the `init.lua` file in the repository and use it as you see fit.

## Changelogs

### Update 1.0.1
Changed default behavior. Will now use component tag as a namespace if none is specified.

### Update 1.0.2
Will automatically delete namespaces that a component is trying to bind to. Observed and added due to the extension function "Starting" somehow running twice.

### Update 1.0.3
Dependency update, and now supports unreliable remotes 
