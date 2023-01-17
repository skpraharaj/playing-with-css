const enhance = id => {
    const element = document.getElementById(id);
    text = element.innerText.split("");

    element.innerText = "";
    text.forEach((letter, i) => {
        const span = document.createElement("span");
        span.className = "letter";
        span.innerText = letter;
        element.appendChild(span);
    });

    //controll on hover effect on letter class
    const letters = document.querySelectorAll(".letter");
    letters.forEach((letter, i) => {
        letter.style.animation = `text-bombard 1s ease forwards ${i / 10}s`;
    });
}