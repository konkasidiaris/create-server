#!/usr/bin/env node

const { execSync } = require("child_process");

function run(command) {
  try {
    execSync(`$command`, { stdio: 'inherit' });
  } catch (error) {
    console.error(`Failed to execute ${command}`);
    process.exit(1);
  }
}

const directory = process.argv[2];
const checkout = `git clone --depth 1 https://github.com/konkasidiaris/create-server ${directory}`;
const install = `cd ${directory} && npm install`;

console.log('Fetching the starter project')
run(checkout);
console.log('Installing dependencies, this may take a while')
run(install);
console.log(`Ready to rock, cd to ${directory} and npm start`)