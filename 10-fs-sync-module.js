const {readFileSync, writeFileSync} = require('fs');
console.log('Start');

const first = readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/second.txt','utf8');

writeFileSync(
    './content/resul-sync.txt',
    `Here is the reult : ${first},${second}\n`,
    {flag:'a'}
    )
console.log('done with this task');
console.log('Starting with a new one');