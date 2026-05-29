import chalk from "chalk";
import { select, isCancel } from "@clack/prompts";



export async function runCliMode() {
    while (true) {
        const mode = await select({
            message: "Choose sub mode",
            options: [
                { value: "agent", label: "Agent Mode" },
                { value: "chat", label: "Chat Mode" },
                { value: "back", label: "← Back to Main Menu" },
            ],
        });

        if (isCancel(mode) || mode === "back") return;

        if (mode === "agent") {
            console.log(chalk.dim("starting agent mode..."));
        }
        if (mode === "chat") {
            console.log(chalk.dim("starting chat mode..."));
        }

        if (mode !== 'agent' && mode !== 'chat') {
            console.log(chalk.red('\nnot available yet.\n'));
        }

    }
}