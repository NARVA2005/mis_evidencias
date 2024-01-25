//Interacción

//Variables input con su llado del ID para su uso
const inputRojo = document.getElementById("rojo"); //atributo ID rojo
const inputVerde = document.getElementById("verde");//atributo ID verde
const inputAzul = document.getElementById("azul");//atributo ID azul
//Variables P (texto) para la numeración
const textoRojo = document.getElementById("texto-rojo");
const textoVerde = document.getElementById("texto-verde");
const textoAzul = document.getElementById("texto-azul");

//asignacion de valores a la variable
let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

//Asignacion de texto por su valor input del usuario
textoRojo.textContent = inputRojo.value;
textoVerde.textContent = inputVerde.value;
textoAzul.textContent = inputAzul.value;

//Función de actualizacion del contenedor
function actualizarColor(rojo, verde, azul) {
  const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;  //funcion RGB para la numeracion del elemento
  document.body.style.backgroundColor = colorRGB;//retorta el valor del color
}

// Para actualizar Red (Rojo).
// Escuchador de eventos por el usuario (change)
inputRojo.addEventListener("change", (e) => {
  rojo = e.target.value;  //Elemento clickado por el usario guardado en la variable
  textoRojo.textContent = rojo; //modifica el contenido del texto
  actualizarColor(rojo, verde, azul);//retorna el color
});

// Para actualizar Green (Verde).
inputVerde.addEventListener("change", (e) => {
  verde = e.target.value; //Elemento clickado por el usario guardado en la variable
  textoVerde.textContent = verde; //modifica el contenido del texto
  actualizarColor(rojo, verde, azul);//retorna el color
});

// Para actualizar Blue (Azul).
inputAzul.addEventListener("change", (e) => {
  azul = e.target.value; //Elemento clickado por el usario guardado en la variable
  textoAzul.textContent = azul; //modifica el contenido del texto
  actualizarColor(rojo, verde, azul);//retorna el color
});
