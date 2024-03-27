const body = document.body;
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");
const button = document.querySelector(".container");
const aside = document.querySelector(`aside`);
const header = document.querySelector(`header`)
const image = document.querySelector(`img`)
const footer = document.querySelector(`footer`)

function postMe() {
    const post = document.getElementById(`save`).value
    sessionStorage.setItem(`user`, `title`, `text`);
}

const h1El = document.createElement(`h1`)
h1El.textContent = `Praise The Sun`
h1El.setAttribute(`style`, `display: flex; justify-content: center;`)
header.appendChild(h1El)


function toggleTheme() {
    const button = document.querySelector('.container');
    const body = document.body;
    const aside = document.querySelector('aside'); 

    button.classList.toggle('light-theme');
    button.classList.toggle('dark-theme');
    body.classList.toggle('dark-theme');
    aside.classList.toggle('dark-theme');
    h1El.classList.toggle(`dark-theme`);
    image.classList.toggle(`dark-theme`);
    if (aside.classList.contains('dark-theme')) {
        aside.style.backgroundColor = 'black';
        h1El.textContent = `If only Could be Incandescent..`
        image.style.display = `none`
    } else {
        aside.style.backgroundColor = '';
        h1El.textContent = `Praise The Sun`
        image.style.display = `initial`
    }
}


button.addEventListener('click', () => {
    sun.classList.toggle('visible')
    moon.classList.toggle('visible')
})

const post = document.getElementById(`blog-post`)
post.setAttribute(`style`, `display: flex; flex-direction: column;`);

const textEl = document.getElementById(`text`)
textEl.setAttribute(`style`, `height: 200px;`)

const h2El = document.createElement(`h2`)
h2El.textContent = `Made with ❤️ by luislaplace`
h2El.setAttribute(`style`, `position: relative; left: 42%; top: 80px;`)
footer.appendChild(h2El)