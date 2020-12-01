const body = document.querySelector('body');
setInterval(fallingLetters, 50);
let alphabetUpperArray = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
let alphabetArray = alphabetUpperArray.split('');


function fallingLetters(){
    const content = document.createElement('div');
    let letterNumber = Math.floor(genRandom());
    content.innerHTML = alphabetArray[letterNumber];
    content.style.right = Math.random() * window.innerWidth + `px`;
    body.appendChild(content);
}

function genRandom(){
    let number = Math.random() * alphabetArray.length;
    return number;
}
