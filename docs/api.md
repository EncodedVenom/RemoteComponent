# API

Before reading further, you should be familiar with normal components first. This extension does not change any functionality from the [original module](https://sleitnick.github.io/RbxUtil/api/Component/).

This extension operates the same way [Knit does under the hood](https://sleitnick.github.io/Knit/docs/services#client-communication).

## New Additions

### RemoteComponent.RemoteNamespace

Declares a namespace for which all remotes should be created under the target instance.

::: code-group
```lua [Component.lua]
Component.RemoteNamespace = "Namespace"
```
:::

::: info
RemoteNamespace is optional! If you do not define it, it will default to the component's tag.
:::

::: warning
Both the client and server namespace must be the same for each side to communicate! Be careful if you use this property!
:::

### RemoteComponent.Client

Exposes methods to the client from a server component.

::: code-group
```lua [ServerComponent.lua]
ServerComponent.Client = {
    RemoteSignal = Knit.CreateSignal()
}
```
:::
::: info
This table works exactly the same as Knit services do.
:::

You can also add functions like so:

::: code-group
```lua [ServerComponent.lua]
function ServerComponent.Client:ExposedMethod(player)
    -- TODO: Add return value
end
```
:::

### RemoteComponent.Server

Exposes server methods to the client. Automatically injected upon creation.

::: code-group
```lua [ClientComponent.lua]
function ClientComponent:Start()
    self.Server:ExposedMethod() -- Call the exposed method above!
    self.Server.RemoteSignal:Fire() -- Fire the exposed RemoteSignal!
end
```
:::

## Lifecycle

::: info
This section is not necessary to understand in order to use the module.
This section is provided for those wanting to understand how this extension works under the hood.
:::

::: warning
The following are meant for internal use only.
:::

### RemoteComponentExtension.Starting
Binds a component to a RemoteComponent on creation.

### RemoteComponentExtension.Stopping
Destroys any remotes created on the target component.

## Objects

::: info
This section is not necessary to understand in order to use the module.
This section is provided for those wanting to understand how this extension works under the hood.
:::

::: danger
The following are exposed in the component. Do not try to modify them as it may result in undesired behavior.
:::

### RemoteComponent._clientComm

A reference to [The client's Comm instance](https://sleitnick.github.io/RbxUtil/api/ClientComm).

### RemoteComponent._serverComm

A reference to [The server's Comm instance](https://sleitnick.github.io/RbxUtil/api/ServerComm).