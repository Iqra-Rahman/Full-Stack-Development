function displayTraffic(light){
    console.log(light)
}

// setTimeout(displayTraffic('🟢'), 2000)  //executes instantly
var traffic = setTimeout(displayTraffic, 4000, '🟢')  //executes after 2 seconds
displayTraffic('🔴')

// -------------------------------------------------------------------------
//exercise1
// log answer after 3 seconds

function logAnswer(answer, points){
    console.log(`The capital of India is ${answer}. If your answer is correct give yourself ${points} points`,)
}

var answer = 'New Delhi'
var points = 5
setTimeout(logAnswer, 3000, answer, points)
// --------------------------------------------------------------------------
// clearTimeout - cancel a scheduled timeout

document.getElementById('stopel').addEventListener('click', function(){
    clearTimeout(traffic)
    console.log("cancelling green light...")
})

