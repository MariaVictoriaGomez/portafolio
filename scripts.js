
window.addEventListener('scroll', windowHandleScroll);
arrow.addEventListener('click', arrowHandleClick);


const botonModo = document.getElementById('boton-modo');


function cambiarModo() {
    document.body.classList.toggle('dark-mode'); // Alternar la clase para modo oscuro
    document.body.classList.toggle('light-mode'); // Alternar la clase para modo claro
    // Cambiar el icono del botón basado en la clase actual
    const icono = document.body.classList.contains('dark-mode') ? 'light_mode' : 'dark_mode';
    botonModo.innerHTML = `<span class="material-symbols-outlined">${icono}</span>`;
}

botonModo.addEventListener('click', cambiarModo);


