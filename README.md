# loft-javascript-client

## Setup

Add this repository as a dependency to your `package.json` file:
npm
`npm install https://github.com/loft-sh/loft-javascript-client`

yarn
`yarn add https://github.com/loft-sh/loft-javascript-client`

pnpm
`pnpm install https://github.com/loft-sh/loft-javascript-client`

## Usage

The client can be imported `@loft-enterprise/client`.
It's a singleton instance that doesn't require further configuration and can be used like so:

```typescript
import { client } from "@loft-enterprise/client"

await client.management(Resources.ClusterV1VirtualCluster).List()
```

If you need to access the generated models outside of the client and `Resources`, you need to import them from the `gen` subfolder:

```typescript
import { ClusterV1VirtualCluster } from "@loft-enterprise/client/gen/models/ClusterV1VirtualCluster"
```
