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
local Knit = require(game:GetService("ReplicatedStorage").Packages.Knit)
local Janitor = require(Knit.Util.Janitor)

local ServerComponent = {
    Client = {
        Signal = Knit.CreateSignal(); -- Can use "SIGNAL_MARKER" instead, but it's advised to use this method.
    }
}
ServerComponent.__index = ServerComponent

ServerComponent.Tag = "RemoteComponentExample"

function ServerComponent.new(instance)
    local self = setmetatable({}, ServerComponent)
    self._janitor = Janitor.new()
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
    self._janitor:Destroy()
end

return ServerComponent
```

Client:
```lua
local Knit = require(game:GetService("ReplicatedStorage").Packages.Knit)
local Janitor = require(game:GetService("ReplicatedStorage").Packages.Janitor)

local ClientComponent = {}
ClientComponent.__index = ClientComponent

ClientComponent.Tag = "RemoteComponentExample"

function ClientComponent.new(instance)
    local self = setmetatable({}, ClientComponent)
    self._janitor = Janitor.new()
    return self
end

function ClientComponent:Init()
    print(self.Server:Hello("Hey "..self.Instance.Name.."!")) -- -> true
    self.Server.Signal:Fire()
end

function ClientComponent:Destroy()
    self._janitor:Destroy()
end

return ClientComponent
```

Bootstrap:
```lua
local RemoteComponent = require(path.to.remoteComponent)

RemoteComponent.UsePromisesForMethods = true -- If set to true, all functions turn into promises. Will not create promisified versions of functions.

RemoteComponent.Auto(folderHousingTheRemoteComponents) -- or however you want to set this up.
```

## Installation

Use Wally and add to your wally.toml:
```
RemoteComponent = "encodedvenom/remotecomponent@^0.1.0-rc.2"
```

Add the project as a git submodule:
```bash
git submodule add https://github.com/EncodedVenom/RemoteComponent ./vendor/RemoteComponent
```

The git submodule includes a `default.project.json` file which syncs the file to your workflow. The module can be referenced as shown:

```json
"RemoteComponent": {
    "$path": "vendor/RemoteComponent/default.project.json"
}
```
