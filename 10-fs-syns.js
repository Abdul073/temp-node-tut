const { log } = require('console');
const {readFileSync, writeFileSync} = require('fs');
console.log('start');
const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/first.txt','utf8');
console.log(first, second)
writeFileSync('./content/reault-sync.txt',`here is the result:${first},${second}`,{flag:'a'}
)
console.log('done with this task');
console.log('starting the next one');