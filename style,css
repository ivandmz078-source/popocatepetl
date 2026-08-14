* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    min-height: 100vh;
    font-family: Arial, Helvetica, sans-serif;
    background: #070707;
    color: white;
    overflow: hidden;
}


/* =========================
   FONDO
========================= */

.background {
    position: fixed;
    inset: 0;
    background:
        radial-gradient(circle at 20% 20%, #292929 0%, transparent 30%),
        radial-gradient(circle at 80% 80%, #1b1b1b 0%, transparent 30%),
        #070707;
    z-index: -2;
}

.glow {
    position: absolute;
    width: 350px;
    height: 350px;
    border-radius: 50%;
    filter: blur(120px);
    opacity: 0.25;
}

.glow-1 {
    background: #ffffff;
    top: -150px;
    left: -100px;
}

.glow-2 {
    background: #555555;
    bottom: -150px;
    right: -100px;
}


/* =========================
   PANTALLA PRINCIPAL
========================= */

.container {
    width: 100%;
    min-height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 20px;

    animation: fadeIn 0.8s ease;
}

.card {
    width: 100%;
    max-width: 450px;

    padding: 45px 35px;

    text-align: center;

    background: rgba(20, 20, 20, 0.82);

    border: 1px solid rgba(255, 255, 255, 0.08);

    border-radius: 28px;

    box-shadow:
        0 30px 80px rgba(0, 0, 0, 0.7),
        inset 0 1px rgba(255, 255, 255, 0.05);

    backdrop-filter: blur(20px);
}

.emoji {
    font-size: 42px;
    margin-bottom: 20px;
}

.small-text {
    font-size: 11px;
    letter-spacing: 4px;
    color: #888;
    margin-bottom: 15px;
}

h1 {
    font-size: clamp(35px, 8vw, 55px);
    line-height: 0.95;
    font-weight: 800;
    letter-spacing: -2px;
}

h1 span {
    color: #ff4b4b;
}

.description {
    color: #888;
    margin-top: 20px;
    font-size: 14px;
}


/* =========================
   INPUT
========================= */

.input-container {
    display: flex;
    align-items: center;

    margin-top: 30px;

    padding: 0 20px;

    height: 65px;

    background: #0c0c0c;

    border: 1px solid #292929;

    border-radius: 16px;

    transition: 0.3s;
}

.input-container:focus-within {
    border-color: #666;

    box-shadow:
        0 0 0 4px rgba(255,255,255,0.03);
}

.input-container input {
    width: 100%;

    background: transparent;
    border: none;
    outline: none;

    color: white;

    font-size: 28px;
    font-weight: 700;

    text-align: center;
}

.input-container input::placeholder {
    color: #333;
}

.input-container span {
    color: #666;
    font-size: 15px;
    font-weight: bold;
}


/* =========================
   BOTÓN
========================= */

button {
    width: 100%;
    height: 60px;

    margin-top: 18px;

    border: none;
    border-radius: 15px;

    background: white;
    color: black;

    font-size: 14px;
    font-weight: 800;

    letter-spacing: 1px;

    cursor: pointer;

    transition:
        transform 0.2s,
        box-shadow 0.2s,
        background 0.2s;
}

button span {
    margin-left: 8px;
    font-size: 18px;
}

button:hover {
    transform: translateY(-3px);

    box-shadow:
        0 12px 30px rgba(255,255,255,0.12);
}

button:active {
    transform: scale(0.97);
}

.warning {
    margin-top: 20px;
    font-size: 10px;
    color: #555;
}


/* =========================
   RESULTADO
========================= */

.result-screen {
    display: none;

    position: fixed;
    inset: 0;

    justify-content: center;
    align-items: center;

    padding: 20px;

    background:
        radial-gradient(circle at center, #242424 0%, #050505 65%);

    animation: fadeIn 0.7s ease;
}

.result-content {
    text-align: center;

    max-width: 500px;
    width: 100%;
}

.result-small {
    font-size: 11px;
    letter-spacing: 5px;
    color: #777;

    margin-bottom: 10px;
}

.result-content h2 {
    font-size: clamp(45px, 12vw, 85px);
    font-weight: 900;

    letter-spacing: -5px;

    margin-bottom: 10px;

    text-shadow:
        0 10px 40px rgba(0,0,0,0.8);
}


/* =========================
   IMAGEN GIRATORIA
========================= */

.image-container {
    width: min(330px, 80vw);
    height: min(330px, 80vw);

    margin: 10px auto;

    display: flex;
    justify-content: center;
    align-items: center;

    perspective: 1000px;
}

.image-container img {
    width: 100%;
    height: 100%;

    object-fit: contain;

    border-radius: 20px;

    animation:
        rotate360 2.8s linear infinite,
        floating 2s ease-in-out infinite;

    filter:
        drop-shadow(0 25px 30px rgba(0,0,0,0.7));
}

.result-content h3 {
    font-size: 35px;

    margin-top: 5px;
}

.result-text {
    color: #999;

    line-height: 1.5;

    margin-top: 8px;
}

.again-button {
    max-width: 260px;

    margin-top: 20px;

    height: 50px;

    background: #171717;
    color: white;

    border: 1px solid #333;
}

.again-button:hover {
    background: #222;
}


/* =========================
   YOUTUBE
========================= */

.music-player {
    position: fixed;

    width: 1px;
    height: 1px;

    left: -100px;
    top: -100px;

    opacity: 0;
    pointer-events: none;
}

.music-player iframe {
    width: 1px;
    height: 1px;
}


/* =========================
   ANIMACIONES
========================= */

@keyframes rotate360 {

    from {
        transform: rotateY(0deg);
    }

    to {
        transform: rotateY(360deg);
    }
}

@keyframes floating {

    0%, 100% {
        translate: 0 0;
    }

    50% {
        translate: 0 -10px;
    }
}

@keyframes fadeIn {

    from {
        opacity: 0;
        transform: scale(0.96);
    }

    to {
        opacity: 1;
        transform: scale(1);
    }
}


/* =========================
   CELULAR
========================= */

@media (max-width: 500px) {

    .card {
        padding: 35px 25px;
        border-radius: 24px;
    }

    .result-content h2 {
        letter-spacing: -3px;
    }

    .image-container {
        width: 280px;
        height: 280px;
    }
}
