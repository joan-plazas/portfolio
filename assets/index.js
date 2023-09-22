function mostrarTexto(texto) {
    // Obtén el elemento donde mostrar el texto suave
    const textoSuave = document.getElementById('texto-suave');
    // Establece el texto deseado
    textoSuave.innerText = texto;
    // Muestra el elemento
    textoSuave.style.opacity = '1';
}

function ocultarTexto() {
    // Oculta el elemento con un efecto suave
    const textoSuave = document.getElementById('texto-suave');
    textoSuave.style.display = '0';
}
