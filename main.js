// === HEADER ====
const btnInicio = document.getElementById("btnInicio");
const btnSobreMi = document.getElementById("btnSobreMi");
const btnProyectos = document.getElementById("btnProyectos");
const btnContacto = document.getElementById("btnContacto");

const heroSection = document.getElementById("heroSection");
const sobreMi = document.getElementById("sobreMi");
const proyectos = document.getElementById("proyectos");
const contacto = document.getElementById("contacto");


// solo deja visible el apartado 'Inicio'
btnInicio.addEventListener("click", function(){

    heroSection.style.display = "flex";
    sobreMi.style.display = "none";
    proyectos.style.display = "none";
    contacto.style.display = "none";
})

// solo deja visible el apartado 'Sobre Mí'
btnSobreMi.addEventListener("click", function(){

    heroSection.style.display = "none";
    sobreMi.style.display = "flex";
    proyectos.style.display = "none";
    contacto.style.display = "none";
})

// solo deja visible el apartado 'Proyectos'
btnProyectos.addEventListener("click", function(){

    heroSection.style.display = "none";
    sobreMi.style.display = "none";
    proyectos.style.display = "flex";
    contacto.style.display = "none";
})

// solo deja visible el apartado 'Contacto'
btnContacto.addEventListener("click", function(){

    heroSection.style.display = "none";
    sobreMi.style.display = "none";
    proyectos.style.display = "none";
    contacto.style.display = "flex";
})

// ==== CONTACTO ====
const inputNombre = document.getElementById("nombre");
const inputPrApellido = document.getElementById("prApellido");
const inputSgApellido = document.getElementById("sgApellido");
const inputEmail = document.getElementById("email");
const inputComentario = document.getElementById("comentario");

const infoNombre = document.getElementById("infoNombre");
const infoPrApellido = document.getElementById("infoPrApellido");
const infoSgApellido = document.getElementById("infoSgApellido");
const infoEmail = document.getElementById("infoEmail");
const infoComentario = document.getElementById("infoComentario");

const ventana = document.getElementById("ventanaEmergente");
const btnEnviar = document.getElementById("btnEnviar");
const btnCerrar = document.getElementById("btnCerrar")



btnEnviar.addEventListener("click", function(){

    const nombre = inputNombre.value.trim();
    const prApellido = inputPrApellido.value.trim();
    let sgApellido = inputSgApellido.value.trim();
    const email = inputEmail.value.trim();
    const comentario = inputComentario.value.trim();

    if(nombre === "" || prApellido === "" || sgApellido === "" || email === "" || comentario === ""){
        alert("Error. Debes rellenar todos los campos")
    }
    else{
        ventana.style.display = "flex";

        infoNombre.innerText = nombre;
        infoPrApellido.innerText = prApellido;
        infoSgApellido.innerText = sgApellido;
        infoEmail.innerText = email;
        infoComentario.innerText = comentario;
    }
})

btnCerrar.addEventListener("click", function(){
    ventana.style.display = "none";
})
