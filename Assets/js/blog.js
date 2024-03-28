const body = document.body;
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");
const button = document.querySelector(".container");
const backBtn = document.querySelector(".backBtn")
const header = document.querySelector(`header`);
const footer = document.querySelector(`footer`);


const h1El = document.createElement(`h1`)
h1El.textContent = `PRAISE IT`
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


const storedPost = JSON.parse(localStorage.getItem('posts'));

if (storedPost) {
    const postList = document.getElementById('postList');

    storedPost.forEach(post => {
        const listItem = document.createElement('li');
        listItem.setAttribute('style', 'list-style: none; position: relative; border: 5px solid #ccc; padding: 10px; margin-bottom: 10px;');


        const h3El = document.createElement('h3');
        h3El.textContent = `Title: ${post.title}`;

        const pEl = document.createElement('p');
        pEl.textContent = post.text;

        const h6El = document.createElement('h6');
        h6El.textContent = `Posted by: ${post.user}`;


        listItem.appendChild(h3El);
        listItem.appendChild(pEl);
        listItem.appendChild(h6El);

        postList.appendChild(listItem);
    });
}

const h2El = document.createElement(`h2`)
h2El.textContent = `Made with ❤️ by luislaplace`
h2El.setAttribute(`style`, `display: flex; justify-content: center; top: 80px;`)

const a = document.createElement(`a`)
const link = document.createTextNode(`➡️Portfolio!⬅️`)
a.setAttribute(`style`, `text-decoration: none; font-size: larger; color: inherit; position: relative; display: flex; justify-content: center;`)
a.appendChild(link)
a.title = `Other work(s)`
a.href = `https://luislaplace.github.io/Portfolio/`

footer.appendChild(h2El)
footer.appendChild(a)

