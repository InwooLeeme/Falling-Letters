const body = document.querySelector('body');
//setInterval(fallingLetters, 50);
let alphabetUpperArray = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
let alphabetArray = alphabetUpperArray.split('');


function fallingLetters(){
    const content = document.createElement('div');
    content.innerHTML = `A`;
    document.body.appendChild(content);
}

