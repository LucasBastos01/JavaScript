const textoInput = document.getElementById('texto');
const resultadoFinal = document.getElementById('resultado');

function atualizarCaracteres() {
    const numeroCaracteres = textoInput.value.length;
    if (numeroCaracteres > 0) {
        resultadoFinal.innerHTML = `Número de caracteres em tempo real: ${numeroCaracteres}`;
        resultadoFinal.style.display = "block";
        console.log(numeroCaracteres)
    } else {
        resultadoFinal.style.display = "none";
    }
}

textoInput.addEventListener('input', atualizarCaracteres);