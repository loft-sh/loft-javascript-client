const { build } = require("esbuild")
const { dependencies } = require("../package.json")
const fs = require("fs/promises")

const OUT_DIR = "lib"

async function buildLib() {
  console.log("Removing lib directory...")
  try {
    await fs.rm(OUT_DIR, { recursive: true })
  } catch {
    /* noop */
  }

  const sharedConfig = {
    entryPoints: ["index.ts"],
    bundle: true,
    minify: true,
    external: Object.keys(dependencies),
  }

  const node = build({
    ...sharedConfig,
    platform: "node",
    outfile: `${OUT_DIR}/index.js`,
  })

  const neutral = build({
    ...sharedConfig,
    outfile: `${OUT_DIR}/index.esm.js`,
    platform: "neutral",
    format: "esm",
  })

  console.log("Building...")
  await Promise.all([node, neutral])
  console.log("Done!")
}

buildLib()
