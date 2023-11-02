function horas() {
    const hora = document.getElementById('hora');
    var tempo = new Date();
    var horas = tempo.getHours();
    var minutos = tempo.getMinutes();
    var segundos = tempo.getSeconds();
    if (horas < 10) {
        horas = "0" + horas;
    }
    if (minutos < 10) {
        minutos = "0" + minutos;
    }
    if (segundos < 10) {
        segundos = "0" + segundos;
    }
    hora.innerHTML = `${horas} : ${minutos} : ${segundos}`;
}
setInterval(horas, 1000);