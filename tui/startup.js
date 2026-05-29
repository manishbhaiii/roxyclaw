import { select, isCancel } from "@clack/prompts";
import chalk from "chalk";
import figlet from "figlet";

const BANNER_FONT = "ANSI Shadow";
const SHADOW = chalk.hex("#860090");
const FACE = chalk.hex("#700ce1").bold;

function printBannerWithShadow(ascii) {
  const bannerLines = ascii.replace(/\s+$/, "").split("\n");
  const maxLen = Math.max(...bannerLines.map((l) => l.length), 0);
  const rowWidth = maxLen + 2;

  for (const line of bannerLines) {
    console.log(SHADOW((" " + line).padEnd(rowWidth)));
  }
  process.stdout.write(`\x1b[${bannerLines.length}A`);
  for (const line of bannerLines) {
    console.log(FACE(line.padEnd(rowWidth)));
  }
  console.log();
}

export async function startup() {
  let ascii;
  try {
    ascii = figlet.textSync("RoxyClaw", { font: BANNER_FONT });
  } catch {
    ascii = figlet.textSync("RoxyClaw", { font: "Standard" });
  }
  printBannerWithShadow(ascii);

  const mode = await select({
    message: "welcome to roxyclaw",
    options: [
      { value: "cli", label: "CLI" },
      { value: "gui", label: "GUI" },
      { value: "exit", label: "Exit" },
    ],
  });

  if (isCancel(mode)) {
    process.exit(0);
  }

  if (mode === "cli") {
    console.log(chalk.dim("starting cli mode..."));
  } else if (mode === "gui") {
    console.log(chalk.dim("starting gui mode..."));
  } else if (mode === "exit") {
    console.log(chalk.dim("goodbye."));
    process.exit(0);
  }
}
