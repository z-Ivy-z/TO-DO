/* Disponer el color de la tarjeta según el botón seleccionado.*/
const tarjeta = document.getElementById("tarjeta");
const botones = document.querySelectorAll(".color");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        tarjeta.style.backgroundColor = boton.dataset.color;
    });
});