const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");
const button = document.querySelector(".container");
const aside = document.querySelector(`aside`);
const header = document.querySelector(`header`)
const image = document.querySelector(`img`)
const footer = document.querySelector(`footer`)


const h1El = document.createElement(`h1`)
h1El.textContent = `PRAISE THE SUN`
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

const post = document.getElementById('post');
post.setAttribute('style', 'display: flex; flex-direction: column;');


function postBlog(event) {
    let user = document.getElementById('user').value;
    let title = document.getElementById('title').value;
    let text = document.getElementById('text').value;

    if (user === '' || title === '' || text === '') {
        alert('Please fill out all fields before posting.');
        event.preventDefault();
        console.log("Error entry");
    } else {
        let newPost = { user: user, title: title, text: text };
        let posts = JSON.parse(localStorage.getItem('posts')) || [];

        let isDuplicate = posts.some(post => post.user === user && post.title === title && post.text === text);

        if (isDuplicate) {
            alert('This post already exists.');
        } else {
            posts.push(newPost);
            localStorage.setItem('posts', JSON.stringify(posts));
        }
    }
}


const textEl = document.getElementById(`text`)
textEl.setAttribute(`style`, `height: 200px;`)

const h2El = document.createElement(`h2`)
h2El.textContent = `Made with ❤️ by luislaplace`
h2El.setAttribute(`style`, `position: relative; left: 42%; top: 80px;`)
footer.appendChild(h2El)