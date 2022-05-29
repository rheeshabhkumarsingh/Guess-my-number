'use strict';

// let textContent = reference.textContent;
// console.log(textContent);

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let highscore_reference = document.querySelector('.highscore');
let secretNumber_reference = document.querySelector('.number');
let message_reference = document.querySelector('.message');
let input_reference = document.querySelector('.guess');
let buttonCheck_reference = document.querySelector('.check');
let score_reference = document.querySelector('.score');
let again_reference = document.querySelector('.again');
let body_reference = document.querySelector('body');

let score = 20;
let highscore = 0;

buttonCheck_reference.addEventListener('click', () => {
    let guess = Number(input_reference.value);
    console.log(`guess: ${guess}`);
    if (!guess) {
        message_reference.innerHTML = '🔢 No number!';
    }
    else if (guess === secretNumber) {
        message_reference.textContent = '🎉🥳 Correct Number!';
        highscore_reference.textContent = score;
        if (highscore < score) {
            highscore = score;
        }
        body_reference.style.backgroundColor = '#60b';
        secretNumber_reference.style.width = '30rem';
        secretNumber_reference.textContent = secretNumber;
    }
    else if (guess !== secretNumber) {
        if (score <= 0) {
            message_reference.textContent = 'You lost the game!'
        }
        else if (guess < secretNumber) {
            message_reference.textContent = '🔻 too less';
        }
        else if (guess > secretNumber) {
            message_reference.textContent = '🔼 too high';
        }
        score_reference.textContent = --score;
    }

    // else if( guess < secretNumber) {
    //     if(score>=0){
    //     }
    //     else {
    //         message_reference.textContent = 'You lost the game!'
    //     }
    // }
    // else if(guess > secretNumber){
    //     if(score>=0){
    //         score_reference.textContent = --score;
    //     }
    //     else {
    //     }
    // }
});

again_reference.addEventListener('click', () => {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    secretNumber_reference.textContent = '?';
    secretNumber_reference.style.width = '15rem';
    message_reference.textContent = 'Start guessing...';
    score_reference.textContent = '20';
    score = 20;
    body_reference.style.backgroundColor = '#222';
    input_reference.value = '';
    secretNumber = Math.trunc(Math.random() * 20) + 1;
})