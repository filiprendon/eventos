// let boton = document.querySelector(".btn");

// boton.addEventListener("click", handleEvent);

// function handleEvent(event) {
//   switch (event.type) {
//     case "click":
//       saludo();
//       pregunta();
//       break;
//   }
// }

// function saludo() {
//   alert("Hola");
// }

// function pregunta() {
//   confirm("Seguro que quieres continuar?");
// }


const imagen = document.getElementById('imagen');
const boton = document.getElementById('button');

function hanHechoClick(event){
    if(event.target === imagen){
        alert('Has hecho click a la imagen');
    }
    if(event.target === boton){
        alert('Has hecho click al botón');
    }
}

function mensajeHover(event){
    if(event.target === imagen){
        document.title = 'A380';
    }
    if(event.target === boton){
        document.title = 'Es botón';
    }
}
imagen.addEventListener("click", hanHechoClick);
boton.addEventListener("click", hanHechoClick);
imagen.addEventListener('mouseover', mensajeHover);
boton.addEventListener('mouseover', mensajeHover);
