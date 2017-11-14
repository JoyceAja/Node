//core module
const fs = require('fs')

// fs.readFile('words.txt', function(err,data){
//     console.log(`data: ${data}`)
// })
// if(err){
//     throw err; //stops the process, does not continue to execute. log the error and quit
// }

//can use toString to convert the data to the actual data
//can also use 'utf-8" to change the data to string

//Writing files
// fs.writeFile('message.txt', 'Hello node.js',(err)=>{
//     if (err){
//         throw error;
//     }
//     console.log('The file has been saved')
// })
//AppendFile used to add to existing files

fs.watch('message.txt', (eventType,filename)=> {
console.log(eventType + ' in ' + filename)
})