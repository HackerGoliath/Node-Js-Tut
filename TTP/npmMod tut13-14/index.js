const chalk = require("chalk");
const validator = require('validator')

// console.log(chalk.green.underline.inverse("success"));
// console.log(chalk.red.underline.inverse("false"));

const res = validator.isEmail("deepak@peepak.com")
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));
