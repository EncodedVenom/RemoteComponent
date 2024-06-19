# Quickstart

## Installation

Add the following to your `wally.toml` file:

::: code-group

```toml [wally.toml]
RemoteComponent = "encodedvenom/remotecomponent@1.0.3"
```

:::

Once added, run the following command to install dependencies:

::: code-group

```bash
wally install
```

:::

## Usage

Below is an example usage of how this module works:

::: code-group

```lua [ServerComponent.lua]
local Component = require(...Component)
local RemoteComponent = require(...RemoteComponent)
local Knit = require(...Knit)
-- Replace these with where you installed your packages.


local TAG_NAME = "Test"
local NAMESPACE = "RemoteComponentExample"

local ServerComponent = Component.new({
    Tag=TAG_NAME,
    Extensions={RemoteComponent}
})

-- If omitted, will use the same value as the tag of the component.
ServerComponent.RemoteNamespace = NAMESPACE

ServerComponent.Client = {
    Signal = Knit.CreateSignal()
}

function ServerComponent:Start()
    self.Client.Signal:Connect(function(Player)
        print(`{Player.Name} has fired the remote!`)
    end)
end

function ServerComponent:ServerLogic()
    return "ReturnedServerLogic"
end

function ServerComponent.Client:Hello(Player, msg)
    print(Player, msg) -- Make sure to validate any arguments you pass!
    return true
end

function ServerComponent.Client:FunctionInNeedOfServerLogic(Player)
    local ServerLogic = self.Server:ServerLogic()

    -- Any other operations you would need

    return ServerLogic
end

return ServerComponent
```

```lua [ClientComponent.lua]
local Component = require(...Component)
local RemoteComponent = require(...RemoteComponent)
-- Replace these with where you installed your packages.

local TAG_NAME = "Test"
local NAMESPACE = "RemoteComponentExample"

local ClientComponent = Component.new({
    Tag=TAG_NAME,
    Extensions={RemoteComponent}
})

-- If omitted, will use the same value as the tag of the component.
ClientComponent.RemoteNamespace = NAMESPACE

function ClientComponent:Start()
    print(self.Server:Hello(`Hello {self.Instance.Name}!`))
    self.Server.Signal:Fire()
end

return ClientComponent
```