console.log('first');

setTimeout(()=>{
    console.log('second')
}, 0)

Promise.resolve().then(()=>{
    console.log('third')
})
console.log('fourth')



// Sync code runs first ('First', 'Fourth')
// Microtasks (Promises) run before the next phase ('Second')
// Timers execute last ('Third')


console.log('------------------------------')

console.log('1.')
process.nextTick(()=>{
    console.log('2.')
})
Promise.resolve().then(()=>{
    console.log('3.')
})
setTimeout(()=>{
    console.log('4.')
},0)
setImmediate(()=>{
    console.log('5.')
})
console.log('6.')