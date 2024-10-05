function actualizarFechaYHora() {
    const fechaActual = new Date();
    
    // Formato para la fecha (Ejemplo: Lunes, 4 de Octubre de 2024)
    const opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const fechaFormateada = fechaActual.toLocaleDateString('es-ES', opcionesFecha);
    
    // Formato para la hora (Ejemplo: 14:30:45)
    const horaFormateada = fechaActual.toLocaleTimeString('es-ES');
    
    // Actualiza los elementos en el HTML
    document.getElementById('fecha').textContent = fechaFormateada;
    document.getElementById('hora').textContent = horaFormateada;
}

// Actualiza la hora cada segundo
setInterval(actualizarFechaYHora, 1000);
