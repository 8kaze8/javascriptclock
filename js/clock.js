function askName() {
    var name = prompt ("Lütfen isminizi giriniz:", "Misafir");
    document.getElementById("myName").textContent = name ;
}

function showTime() {
let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

hours = hours < 10 ? "0" + hours : hours;
minutes = minutes < 10 ? "0" + minutes : minutes;
seconds = seconds < 10 ? "0" + seconds : seconds;

let time = hours + ":" + minutes + ":" + seconds;
document.getElementById("myClock").textContent = time;

setTimeout(showTime, 1000);


}

