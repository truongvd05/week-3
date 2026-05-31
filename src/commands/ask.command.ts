import { Command } from "commander";
import { askQuestion } from "../services/kb.service";
import ora from "ora";

export const askCommand = (program: Command) => {
  program
    .command("ask")
    .argument("<question>")
    .option("-v, --verbose", "Show full response details")
    .action(async (question, options) => {
      const spinner = ora("Calling KB API...").start();

      try {
        const data = await askQuestion(question);
        spinner.succeed("Success");

        console.log("\n Question:", data.question);
        console.log("Answer  :", data.answer);

        if (options.verbose) {
          console.log("\n Full response:", JSON.stringify(data, null, 2));
        }
      } catch (error: any) {
        spinner.fail("API Error");
        console.error("Detail:", error.message);
        process.exit(1);
      }
    });
};