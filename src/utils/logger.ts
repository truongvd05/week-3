import chalk from "chalk";

export const logger = {
  success: (msg: string) =>
    console.log(chalk.green(msg)),

  error: (msg: string) =>
    console.log(chalk.red(msg)),
};


