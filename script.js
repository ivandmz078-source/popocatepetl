const questionScreen = document.getElementById("questionScreen");
const resultScreen = document.getElementById("resultScreen");

const weightInput = document.getElementById("weightInput");
const continueButton = document.getElementById("continueButton");
const againButton = document.getElementById("againButton");

const youtubePlayer = document.getElementById("youtubePlayer");


// ==============================
// CONTINUAR
// ==============================

continueButton.addEventListener("click", () => {

    const weight = weightInput.value.trim();

    // Evita continuar vacío
    if (weight === "") {

        weightInput.focus();

        weightInput.animate(
            [
                { transform: "translateX(0)" },
                { transform: "translateX(-8px)" },
                { transform: "translateX(8px)" },
                { transform: "translateX(0)" }
            ],
            {
                duration: 300
            }
        );

        return;
    }


    // Intentar iniciar la música
    youtubePlayer.contentWindow.postMessage(
        '{"event":"command","func":"playVideo","args":""}',
        "*"
    );


    // Desaparece la pantalla inicial
    questionScreen.style.display = "none";


    // Aparece la pantalla de resultado
    resultScreen.style.display = "flex";

});


// ==============================
// ENTER EN EL INPUT
// ==============================

weightInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        continueButton.click();
    }

});


// ==============================
// VOLVER A INTENTAR
// ==============================

againButton.addEventListener("click", () => {

    resultScreen.style.display = "none";

    questionScreen.style.display = "flex";

    weightInput.value = "";

    weightInput.focus();

});
