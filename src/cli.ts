import { Command } from "commander";
import { askCommand } from "./commands/ask.command";
import "dotenv/config";

const program = new Command();

program
  .name("kb-cli")
  .description("Knowledge Base CLI");

askCommand(program);

program.parse();