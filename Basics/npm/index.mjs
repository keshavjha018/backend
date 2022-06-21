//colorizes output
import chalk from "chalk";
console.log(chalk.yellow.inverse("Hello World!!\n"));

//validates email
import validator from "validator";
const res = validator.isEmail("keshav@gmail.com");
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));

