const { error } = require('console');
const {readFileSync, writeFileSync, appendFileSync, readFile, writeFile} = require('fs');
const path = require('path')

//synchronous file

// READ
const file1 = path.join(__dirname, 'l1.js')
const data  = readFileSync(file1, 'utf8')
console.log(data)
// WRITE
const file2 = path.join(__dirname, 'test.txt')
writeFileSync(file2, 'Hello World! This is Iqra.', {flag: 'a'})

// asynchronous file

// READ
readFile(file1, 'utf8', (err, result) =>{
    if(err){
        console.log(err)
        return
    }
    console.log(result)
})

// WRITE
const file3 = path.join(__dirname, 'test2.txt')
writeFile(file3, 'this is the file three writter asynchronously', (err) =>{
    if(err){
        console.log(err)
        return
    }
    
})

console.log('done')