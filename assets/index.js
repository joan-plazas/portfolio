const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

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

function mostrarFechaYHora() {
    // Obtener la fecha y hora actual
    var fechaHoraActual = new Date();

    // Obtener los componentes de la fecha y hora
    var dia = fechaHoraActual.getDate();
    var mes = fechaHoraActual.getMonth() + 1; // Los meses comienzan desde 0, por lo que se suma 1
    var año = fechaHoraActual.getFullYear();

    // Formatear la salida
    var fechaHoraFormateada = dia + '/' + mes + '/' + año;

    // Mostrar la fecha y hora en un elemento HTML con el id "fecha-hora"
    document.getElementById('fecha-hora').textContent = fechaHoraFormateada;
}

// Llamar a la función mostrarFechaYHora al cargar la página
window.onload = function() {
    // Mostrar la fecha y hora actual
    mostrarFechaYHora();

    // Actualizar la fecha y hora cada segundo
    setInterval(mostrarFechaYHora, 1000);
};

// Llamar a la función mostrarFechaYHora al cargar la página
window.onload = function() {
    mostrarFechaYHora();
};

// Función para cambiar el tema a oscuro
function cambiarTemaOscuro() {
    // Cambiar el fondo del body y otros elementos relevantes a oscuro
    document.body.classList.add('bg-dark');
    document.body.classList.remove('bg-light');
    // También puedes cambiar otros estilos, clases, colores, etc., según tus necesidades
  }
  
  // Función para cambiar el tema a claro
  function cambiarTemaClaro() {
    // Cambiar el fondo del body y otros elementos relevantes a claro
    document.body.classList.add('bg-light');
    document.body.classList.remove('bg-dark');
    // También puedes cambiar otros estilos, clases, colores, etc., según tus necesidades
  }
  
  // Obtener el select con el id "theme-select"
  var themeSelect = document.getElementById('theme-select');
  
  // Escuchar el evento de cambio en el select
  themeSelect.addEventListener('change', function() {
    // Obtener el valor seleccionado del select
    var selectedTheme = themeSelect.value;
  
    // Según el valor seleccionado, llamar a la función correspondiente para cambiar el tema
    if (selectedTheme === 'light') {
      cambiarTemaClaro();
    } else if (selectedTheme === 'dark') {
      cambiarTemaOscuro();
    }
});  