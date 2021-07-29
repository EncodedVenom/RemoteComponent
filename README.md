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
local Knit = require(game:GetService("ReplicatedStorage").Knit)
local Maid = require(Knit.Util.Maid)
local RemoteSignal = require(Knit.Util.Remote.RemoteSignal)

local ServerComponent = {
    Client = {
        Signal = RemoteSignal.new()
    }
}
ServerComponent.__index = ServerComponent

ServerComponent.Tag = "RemoteComponentExample"

function ServerComponent.new(instance)
    local self = setmetatable({}, ServerComponent)
    self._maid = Maid.new()
    return self
end

function ServerComponent:Init()
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

function ServerComponent:Destroy()
    self._maid:Destroy()
end

return ServerComponent
```

Client:
```lua
local Knit = require(game:GetService("ReplicatedStorage").Knit)
local Maid = require(Knit.Util.Maid)

local ClientComponent = {}
ClientComponent.__index = ClientComponent

ClientComponent.Tag = "RemoteComponentExample"

function ClientComponent.new(instance)
    local self = setmetatable({}, ClientComponent)
    self._maid = Maid.new()
    return self
end

function ClientComponent:Init()
    print(self.Server:Hello("Hey "..self.Instance.Name.."!")) -- -> true
    self.Server.Signal:Fire()
end

function ClientComponent:Destroy()
    self._maid:Destroy()
end

return ClientComponent
```

Bootstrap:
```lua
local RemoteComponent = require(path.to.remoteComponent)

RemoteComponent.Auto(folderHousingTheRemoteComponents) -- or however you want to set this up.
```

## Installation

Add the project as a git submodule:
```bash
git submodule add https://github.com/EncodedVenom/RemoteComponent ./vendor/RemoteComponent
```

The module includes a `default.project.json` file which syncs the file to your workflow. The module can be referenced as shown:

```json
"RemoteComponent": {
    "$path": "vendor/RemoteComponent/default.project.json"
}
```