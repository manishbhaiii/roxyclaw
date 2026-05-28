#!/usr/bin/env node

import { startup } from "./tui/startup.js";

async function main() {
  await startup();
}

main();
