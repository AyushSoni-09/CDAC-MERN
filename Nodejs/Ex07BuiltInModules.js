const readline = require('readline');
const fs = require('fs');
fs.writeFileSync('SampleText', 'Hello, World! A sample string ti write ', 'utf-8');

const fileName='Ex07BuiltInModules.js'
const content = fs.readFileSync(fileName, 'utf-8');
console.log(`Content of ${fileName}:\n`, content);