const {readFile, writeFile, write} = require('fs');

console.log('starting this task');

readFile('./content/first.txt','utf8',(err, result)=>{
    if(err) {
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/second.txt','utf8',(err, result)=>{
        if(err) {
            console.log(err)
            return
        }
        const second = result;
        writeFile(
            './content/resul-sync.txt',
            `Here is the reult : ${first},${second}\n`,(err,result)=>{
                if(err) {
                    console.log(err)
                    return
                }
                console.log('done with this task');
            }
            )
    });
});  

console.log('Starting new one');