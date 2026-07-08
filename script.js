
const btnAgregar = document.getElementById("btnAgregar");
const modal = document.getElementById("modal");
const cerrar = document.getElementById("close");
const btnCancelar = document.getElementById("btnCancelar");
const btnGuardar = document.getElementById("btnGuardar");

btnAgregar.addEventListener("click",()=>{

    modal.classList.add("active");

});

cerrar.addEventListener("click",()=>{

    modal.classList.remove("active");

});

window.addEventListener("click",(e)=>{

    if(e.target===modal){

        modal.classList.remove("active");

    }

});

btnCancelar.addEventListener("click",()=>{

    modal.classList.remove("active");

});
