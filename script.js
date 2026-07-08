const btnAgregar = document.getElementById("btnAgregar");
const modal = document.getElementById("modal");
const cerrar = document.getElementById("close");
const btnCancelar = document.getElementById("btnCancelar");
const formulario = document.getElementById("taskForm");

// Abrir modal
btnAgregar.addEventListener("click", () => {

    modal.classList.add("active");

});

// Cerrar con la X
cerrar.addEventListener("click", () => {

    modal.classList.remove("active");

});

// Cerrar al presionar Cancelar
btnCancelar.addEventListener("click", () => {

    modal.classList.remove("active");

    formulario.reset();

});

// Cerrar al hacer clic fuera del modal
window.addEventListener("click", (e) => {

    if(e.target === modal){

        modal.classList.remove("active");

    }

});

// SELECCIONAR COLOR

let colorSeleccionado = "#F0D9EF";

document.querySelectorAll(".color").forEach(boton => {

    boton.addEventListener("click", () => {

        document.querySelectorAll(".color")
        .forEach(b => b.classList.remove("active"));

        boton.classList.add("active");

        colorSeleccionado = boton.dataset.color;

    });

});

// CREAR NOTA AL GUARDAR

formulario.addEventListener("submit", (e) => {

    e.preventDefault();

    // Obtener datos cuando se presiona guardar

    const titulo = document.getElementById("titulo").value;

    const descripcion = document.getElementById("descripcion").value;

    const categoria = document.getElementById("categoria").value;

    const fecha = document.getElementById("fecha").value;

    const hora = document.getElementById("hora").value;

    const prioridad = document.getElementById("prioridad").value;

    const estado = document.getElementById("estado").value;

    const etiquetas = document.getElementById("etiquetas").value;



    // Crear tarjeta

    const nota = document.createElement("div");

    nota.className = "nota";

    nota.style.background = colorSeleccionado;

    nota.innerHTML = `

        <h3>${titulo}</h3>

        <p>${descripcion}</p>

        <hr>

        <p>📂 ${categoria}</p>

        <p>📅 ${fecha}</p>

        <p>🕐 ${hora}</p>

        <p>⚡ ${prioridad}</p>

        <p>📌 ${estado}</p>

        <p>🏷️ ${etiquetas}</p>

        <button class="btn-eliminar">
            🗑️ Eliminar
        </button>
    `;

    // Agregar al pizarrón

    document.getElementById("pizarron")
    .appendChild(nota);

    const btnEliminar = nota.querySelector(".btn-eliminar");

    btnEliminar.addEventListener("click",()=>{
        nota.remove();
    });

    // Cerrar modal

    modal.classList.remove("active");

    // Limpiar formulario

    formulario.reset();
});