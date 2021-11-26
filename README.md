# RemoteComponent

A better solution to fix communication across the client-server boundary with regards to [Knit Components](https://github.com/Sleitnick/Knit/)

## Why did I make this?

I wrote a module which is referred to on my profile as [knit-comms-module](https://github.com/EncodedVenom/knit-comms-module). While this does work, it is quite inelegant in application compared to how Knit does several other tasks.

Enter RemoteComponents.

RemoteComponents are a fork of Components. They exist for one purpose: handling client and server communication for you--without the hassle of another module to learn. They are designed to be very familiar to use and pick up. If you've ever created a Knit Service with client-exposed methods and remotes, you can most certainly use this.

## Example

Here is an example of how a RemoteComponent works.

Server:
```lua
local RemoteComponent = require(Path.To.Remote.Component)

local ServerComponent = RemoteComponent.new({Tag="Test"})
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
local RemoteComponent = require(Path.To.Remote.Component)

local ClientComponent = RemoteComponent.new({Tag="Test"})

ClientComponent.RemoteNamespace = "RemoteComponentExample"

function ClientComponent:Start()
    print(self.Server:Hello("Hey "..self.Instance.Name.."!")) -- -> true
    self.Server.Signal:Fire()
end

return ClientComponent
```

## Installation

Use Wally and add to your wally.toml:
```
RemoteComponent = "encodedvenom/remotecomponent@^0.2.0-rc.2"
```
