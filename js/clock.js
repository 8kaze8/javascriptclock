function askName() {
    var name = prompt ("Lütfen isminizi giriniz:", "Misafir");
    document.getElementById("myName").textContent = name ;
}

function showTime() {
    const today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let day = today.toLocaleDateString('tr-TR', { weekday: 'long' });

hours = hours < 10 ? "0" + hours : hours;
minutes = minutes < 10 ? "0" + minutes : minutes;
seconds = seconds < 10 ? "0" + seconds : seconds;

const time = hours + ":" + minutes + ":" + seconds + " " + day;
document.getElementById("myClock").textContent = time;

setTimeout(showTime, 1000);

}

window.onload = function() {
    askName();
    showTime();
  };

