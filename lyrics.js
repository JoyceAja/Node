const fs = require('fs')

// fs.readFile('lyrics-1.txt','utf-8',function(err,data){
//     if(err){
//         throw err
//     }
//     return data 
//     console.log(data)
// })

// // fs.writeFile('lyrics-2.txt',`We only need to stay close 
// // In time, sparks will fly`, (err)=>{
// //     if(err){
// //         throw err
// //     }
// //     console.log('The file is saved')
// // })

// fs.readFile('lyrics-2.txt', 'utf-8', function(err,data){
//     if(err){
//         throw err
//     }
//     return data
//     console.log(data)
// })

fs.readFile('lyrics-1.txt', 'utf-8', function (err, data) {
    if (err) {
        throw err
    }

    fs.readFile('lyrics-2.txt', 'utf-8', function (err, data1) {
        if (err) {
            throw err
        }
        fs.writeFile('lyrics-3.txt', data, (err) => {
            if (err) {
                throw err
            }
        })
        fs.appendFile('lyrics-3.txt', data1, (err) => {
            if (err) {
                throw err
            }
            console.log(data1)
        })
    })

})




// fs.mkdir('folder-1', () => {
//     console.log('Created another new repo!')
//   });