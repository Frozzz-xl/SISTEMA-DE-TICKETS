// Seleccionamos el formulario y el botón
const formulario = document.getElementById('ticketForm');
const botonEnviar = document.getElementById('submitBtn');

// Escuchamos el evento 'submit' (cuando se envía el formulario)
formulario.addEventListener('submit', function() {
    // Cambiamos el texto del botón
    botonEnviar.textContent = 'Enviando...';
    // Cambiamos un poco el color para dar feedback visual
    botonEnviar.style.backgroundColor = '#6c757d'; 
    // Opcional: Deshabilitamos el botón para evitar doble envío
    botonEnviar.disabled = true; 
});