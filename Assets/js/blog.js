const body = document.body;
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");
const button = document.querySelector(".container");
const backBtn = document.querySelector(".backBtn")
const header = document.querySelector(`header`);
const footer = document.querySelector(`footer`);
const article = document.querySelectorAll(`article`)
const h3El = document.querySelectorAll(`h3`);
const pEl = document.querySelectorAll(`p`);
const h6El = document.querySelectorAll(`h6`)

const h1El = document.createElement(`h1`)
h1El.textContent = `Write down your Secrets`
h1El.setAttribute(`style`, `display: flex; justify-content: center;`)
header.appendChild(h1El)

function toggleTheme() {
    const button = document.querySelector('.container');
    const body = document.body;

    button.classList.toggle('light-theme');
    button.classList.toggle('dark-theme');
    body.classList.toggle('dark-theme');
    h1El.classList.toggle(`dark-theme`);
    backBtn.classList.toggle(`dark-theme`);
}

button.addEventListener('click', () => {
    sun.classList.toggle('visible')
    moon.classList.toggle('visible')
})



const h2El = document.createElement(`h2`)
h2El.textContent = `Made with ❤️ by luislaplace`
h2El.setAttribute(`style`, `display: flex; justify-content: center; top: 80px;`)

footer.appendChild(h2El)

