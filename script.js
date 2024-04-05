let boton = document.querySelector('.btn');

boton.addEventListener('click', handleEvent);

function handleEvent(event) {
    switch(event.type) {
        case 'click':
            saludo();
            pregunta();
            break;
        // Altres tipus d'esdeveniments poden ser gestionats aquí si cal.
    }
}

function saludo() {
    alert('Hola');
}

function pregunta() {
    confirm('Seguro que quieres continuar?');
}
