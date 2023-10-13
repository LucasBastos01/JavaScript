const resultadoFinal = document.getElementById('resultado')

function conversorFahrenheit() {
    let temperatura = document.getElementById('temperatura').value || 0;
    const resultado = (temperatura * 9 / 5) + 32
    resultadoFinal.innerHTML = `<p>O valor convertido de: ${temperatura}°C equivale a ${resultado.toFixed(2)}°F </p>`
}

function conversorCelsius() {
    let temperatura = document.getElementById('temperatura').value || 0;
    const resultado = (temperatura - 32) * 5 / 9
    resultadoFinal.innerHTML = `<p>O valor convertido de: ${temperatura}°F equivale a ${resultado.toFixed(2)}°C </p>`
}