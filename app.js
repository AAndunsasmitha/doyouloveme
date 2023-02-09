const buttonHeight = 30;
const buttonWidth = 100;

const maxHeight = window.innerHeight - buttonHeight;
const maxWidth = window.innerWidth - buttonWidth;

window.addEventListener('DOMContentLoaded',()=>{

    const nobutton = document.getElementById('nobtn');
    const yesbutton = document.getElementById('yesbtn');

    document.getElementById('txt').style.display = 'none';

    nobutton.addEventListener('mouseover', () => {
        nobutton.style.left = Math.floor(Math.random()*(maxWidth+1))+'px';
        nobutton.style.top = Math.floor(Math.random()*(maxHeight+1)) + 'px';
    });

    yesbutton.addEventListener('click',() => {
        const emoji = "<h1>🤞</h1>";
        document.getElementById('txt').innerHTML = "Ohh..I knew it. I love you too!🤞";
        document.getElementById('txt').style.display = 'block';
    });

});