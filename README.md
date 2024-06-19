# RemoteComponent

A better solution to fix communication across the client-server boundary with regards to [Knit Components](https://sleitnick.github.io/RbxUtil/api/Component) using the extension framework.

## Installation

See [the wiki](https://encodedvenom.github.io/RemoteComponent/) for documentation regarding installation, a sample project, and the API.

## Changelogs

### Update 1.0.1
Changed default behavior. Will now use component tag as a namespace if none is specified.

### Update 1.0.2
Will automatically delete namespaces that a component is trying to bind to. Observed and added due to the extension function "Starting" somehow running twice.

### Update 1.0.3
Dependency update, and now supports unreliable remotes 
