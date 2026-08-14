const boton = document.getElementById("boton");

const pesoInput = document.getElementById("peso");

const pantallaInicial =
    document.getElementById("pantallaInicial");

const pantallaResultado =
    document.getElementById("pantallaResultado");

const mensaje =
    document.getElementById("mensaje");

const volver =
    document.getElementById("volver");

const youtubeAudio =
    document.getElementById("youtubeAudio");


/* -------------------------
   CUANDO PRESIONA CONTINUAR
------------------------- */

boton.addEventListener("click", function () {

    const peso = pesoInput.value;


    // Comprobar que escribió algo
    if (peso === "" || Number(peso) <= 0) {

        pesoInput.focus();

        pesoInput.style.boxShadow =
            "0 0 0 3px red";

        return;
    }


    /*
        Intentamos activar el video/música
        después del clic del usuario.
    */

    youtubeAudio.src =
        "https://www.youtube.com/embed/JhiguT3ZRY0?autoplay=1&loop=1&playlist=JhiguT3ZRY0";


    // Cambiar pantalla
    pantallaInicial.classList.add("oculto");

    pantallaResultado.classList.remove("oculto");


    // Pequeña pausa para hacer más dramático el resultado
    mensaje.textContent = "Calculando... 🤔";


    setTimeout(function () {

        mensaje.textContent =
            "Resultado encontrado... 💀";

    }, 1200);

});


/* -------------------------
   VOLVER A INTENTAR
------------------------- */

volver.addEventListener("click", function () {

    pantallaResultado.classList.add("oculto");

    pantallaInicial.classList.remove("oculto");

    pesoInput.value = "";

    pesoInput.focus();

});
