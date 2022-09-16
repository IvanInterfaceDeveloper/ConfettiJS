const AccionadorELEMENT = document.querySelector("#Accionador");
const jsConfetti = new JSConfetti();

AccionadorELEMENT.addEventListener('click',  (e) => {
    jsConfetti.addConfetti({
        emojis: ['🌈', '⚡️', '💥', '✨', '💫'],
        });
})