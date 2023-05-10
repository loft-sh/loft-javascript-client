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
import { Client, Resources } from "@loft-enterprise/client"

// init client
const client = new Client("MY_ACCESS_KEY", "https://path-to-loft")

// use client
const result = await client.management(Resources.ManagementV1VirtualClusterInstance).List()
if (result.err) {
  console.error(result)
} else {
  // print all virtual clusters
  console.info(result.val.items)
}
```

If you need to access the generated models outside of the client and `Resources`, you need to import them from the `gen` subfolder:

```typescript
import { ClusterV1VirtualCluster } from "@loft-enterprise/client/gen/models/ClusterV1VirtualCluster"
```
