// WRAPPER
const wrapper = document.createElement('div')
wrapper.id = 'wrp'

// IMG
const img = document.createElement('img')
img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL2bMwNDqMtGpQo2nHnLbwLmTQ3MSzGJe03g&s'
img.id = 'img'

// H1
const h1 = document.createElement('h1')
h1.textContent = 'Faouzia Ouhia'
h1.id = 'h1'

// UL
const Info = ['Beautiful Human', 'Powerful Vocalist', 'Mesmerizing Voice']
const ul = document.createElement('ul')
ul.id = 'ul'

// LI
Info.forEach(el => {
    const li = document.createElement('li');
    li.innerText = el;
    ul.append(li)
})

// UL2
const Info2 = ['Dark Melodies', 'Tragic Stories', 'Depressing Songs']
const ul2 = document.createElement('ul')
ul2.id = 'ul2'

// LI
Info2.forEach(el => {
    const li = document.createElement('li');
    li.innerText = el
    ul2.append(li)
})
ul2.style.display = 'none'

// BUTTON
const btn = document.createElement('button')
btn.innerText = 'button'
btn.id = 'btn'

const clickSound = new Audio('Mouse Click - Sound Effect (HD) (mp3cut.net).mp3');


// IMGS
const imagesData = [
    { src: 'https://p.kindpng.com/picc/s/67-672977_scary-halloween-decorations-clipart-hd-png-download.png', position: 'bottom-left' },
    { src: 'https://t4.ftcdn.net/jpg/16/56/34/71/360_F_1656347193_loN5IDREewXj19BAa7FWw8FPgLE7L67a.jpg', position: 'top-right' },
    { src: 'https://media.istockphoto.com/id/2215516289/photo/transparent-png-background-cracked-glass-with-radiating-fracture-lines-on-white-background.jpg?s=612x612&w=0&k=20&c=M-pX0pwJnXjFbj5g_Jdi9C6NCt8GuHOulNqhCdwmV1Q=', position: 'bottom-right' },
    { src: 'https://t3.ftcdn.net/jpg/09/55/13/10/360_F_955131023_lm7MYATz3qW4AtWyK9jHEpmAw5uXuNRl.jpg', position: 'top-left' },
    { src: 'https://png.pngtree.com/png-clipart/20250104/original/pngtree-cute-happy-stars-png-image_18742394.png', position: 'center' }
]


const imageElements = imagesData.map(data => {
    const imgElement = document.createElement('img');
    imgElement.src = data.src;
    imgElement.classList.add('dynamic-img', data.position);
    document.body.append(imgElement);
    return imgElement
})

// EVENTS
let isChanged = false
btn.addEventListener('click', () => {
    clickSound.currentTime = 0;

    clickSound.play();
    if (!isChanged) {
        wrapper.style.background = 'red';
        img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIlRzOkgq30GX9DB7EzjFk7zwPWThtYDwEOQ&s';
        h1.classList.add('Font');
        btn.classList.add('btnmore');
        ul.style.display = 'none';
        ul2.style.display = 'block';
        document.body.style.background = 'linear-gradient(45deg, black, red, black)';

        isChanged = true;
    } else {

        wrapper.style.background = '';
        img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL2bMwNDqMtGpQo2nHnLbwLmTQ3MSzGJe03g&s';
        h1.classList.remove('Font');
        btn.classList.remove('btnmore');
        ul.style.display = 'block';
        ul2.style.display = 'none';
        document.body.style.background = 'linear-gradient(45deg, pink, pink, violet, violet, pink, pink)';

        isChanged = false;
    }
})

document.body.style.background = 'pink'
btn.addEventListener('mouseenter', () => {
    if (!isChanged) {
        document.body.style.background = 'linear-gradient(45deg, pink, pink, violet, violet, pink, pink)';
    } else {
        document.body.style.background = 'linear-gradient(45deg, black, red, black)';
    }
    imageElements.forEach(img => img.style.display = 'block');
})
btn.addEventListener('mouseleave', () => {
    if (!isChanged) {
        document.body.style.background = 'pink';
    } else {
        document.body.style.background = 'black';
    }
    imageElements.forEach(img => img.style.display = 'none');
})

wrapper.append(img, h1, ul, ul2, btn)
document.body.append(wrapper)