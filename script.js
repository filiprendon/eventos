let boton = document.querySelector(".btn");

let numeros = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
boton.addEventListener("click", handleEvent);
boton.addEventListener("contextmenu", handleEvent);
boton.addEventListener("mouseover", handleEvent);
boton.addEventListener("mouseout", handleEvent);
document.addEventListener("mousemove", handleEvent);

function handleEvent(event) {
  switch (event.type) {
    case "click":
      saludo();
      pregunta();
      break;

    case "contextmenu":
      contextFunc();
      break;
    case "mouseover":
      miFunc();
      break;
    case "mouseout":
      moFunc();
      break;
    case "mousemove":
      moveFunc();
      break;
  }
}

function saludo() {
  alert("Hola");
}

function pregunta() {
  confirm("Seguro que quieres continuar?");
}

function contextFunc() {
  alert("Has hecho click derecho");
}

function miFunc() {
  document.body.style.backgroundColor = "green";
}

function moFunc() {
  document.body.style.backgroundColor = "#333";
}

function moveFunc() {
  boton.textContent = generarNumeroAleatorio();
}

function generarNumeroAleatorio() {
  let randomNum = Math.floor(Math.random() * numeros.length);
  return numeros[randomNum];
}
