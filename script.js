let boton = document.querySelector(".btn");

boton.addEventListener("click", handleEvent);

function handleEvent(event) {
  switch (event.type) {
    case "click":
      saludo();
      pregunta();
      break;
  }
}

function saludo() {
  alert("Hola");
}

function pregunta() {
  confirm("Seguro que quieres continuar?");
}
