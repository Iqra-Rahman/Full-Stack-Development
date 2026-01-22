const fs = require('fs')

fs.readFile('./nodejs/l2.js', 'utf8', (err, data) =>{
    if(err){
        console.log(err)
    }
    console.log('reading the file',data)
})

console.log('starting the next task')