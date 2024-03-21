let boton = document.querySelector('.btn');

boton.addEventListener('click', saludo);
boton.addEventListener('click', pregunta);

function saludo(){
    alert('Hola');
}

function pregunta(){
    confirm('Seguro que quieres continuar?');
}