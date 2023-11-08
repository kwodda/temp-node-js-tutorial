//GLOBAL - NO WINDOWS

//__dirname = shows path to current directory
//__filename = shows file name
//require = function to use modules (CommonJS)
//module = provides info about the current module (file)
//process = provides info about env where the program is being executed

console.log(__dirname);
setInterval(()=>{
    console.log(`Hello world`);
},1000);
//setTimeout()- waits for the time set to execute.
setTimeout(()=>{
    console.log(`setTimeout hellow world`)
},2000);
