let counter = 0;
        document.getElementById("clickme").onclick = function(){
            counter++;
            document.getElementById("counterDisplay").innerText = `you clicked me ${counter} times`;
        }
let count = 0;
function btn(){
    count++;
    document.getElementById("save-btn").innerText = count;
}