const horasAnalogico = document.querySelector(".hour");
const minutosAnalogico = document.querySelector(".min");
const segundosAnalogico = document.querySelector(".sec");
const horaDigital = document.getElementById('hora');

function getTime() {
    const time = new Date();

    const pegaHora = (360 / 12) * time.getHours();
    const pegaMinutos = (360 / 60) * time.getMinutes();
    const pegaSegundos = (360 / 60) * time.getSeconds();

    horasAnalogico.style.transform = `rotate(${pegaHora}deg)`;
    minutosAnalogico.style.transform = `rotate(${pegaMinutos}deg)`;
    segundosAnalogico.style.transform = `rotate(${pegaSegundos}deg)`;

    var horas = time.getHours();
    var minutos = time.getMinutes();
    var segundos = time.getSeconds();

    if (horas < 10) {
        horas = "0" + horas;
    }
    if (minutos < 10) {
        minutos = "0" + minutos;
    }
    if (segundos < 10) {
        segundos = "0" + segundos;
    }

    horaDigital.innerHTML = `${horas} : ${minutos} : ${segundos}`;
} setInterval(getTime, 1000);

