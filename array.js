let arr = [5, "iqra", true, 45.5, 'a']
console.log(arr)
console.log(arr.length)
console.log(typeof(arr))
for(let i = 0; i<arr.length; i++){
    console.log(typeof(arr[i]))
}

arr.push("heyyyyyyyyyyyyyyy") // add at end
console.log(arr)
arr.pop() // remove from end
console.log(arr)
arr.unshift("i was inserted at start") // add at start
console.log(arr)
arr.shift() // remove from start
console.log(arr)
arr.reverse() // reverse the array
console.log(arr)
arr.splice(3,0,89); // at index 3, remove 0 elements and add 89
console.log(arr)
arr.splice(1,1); // at index 1, remove 1 element
console.log(arr)