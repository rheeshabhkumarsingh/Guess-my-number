'use strict';

// let textContent = reference.textContent;
// console.log(textContent);

const secretNumber = Math.trunc(Math.random() * 20) + 1;

let highscore_reference = document.querySelector('.highscore');
let secretNumber_reference = document.querySelector('.number');
let message_reference = document.querySelector('.message');
let input_reference = document.querySelector('.guess');
let buttonCheck_reference = document.querySelector('.check');
let score_reference = document.querySelector('.score');

let score = Number(score_reference.textContent);

secretNumber_reference.textContent = secretNumber;
buttonCheck_reference.addEventListener('click',() => {
    let guess = Number(input_reference.value);
    console.log(`guess: ${guess}`);
    if(!guess){
        message_reference.innerHTML = '🔢 No number!';        
    }
    else if( guess === secretNumber ) {
        message_reference.textContent = '🎉🥳 Correct Number!';
        highscore_reference.textContent = score;
    }
    else if( guess < secretNumber) {
        if(score>0){
            message_reference.textContent = '🔻 too less';
            score_reference.textContent = --score;
        }
        else {
            message_reference.textContent = 'You lost the game!'
        }
    }
    else if(guess > secretNumber){
        if(score>0){
            message_reference.textContent = '🔼 too high';
            score_reference.textContent = --score;
        }
        else {
            message_reference.textContent = 'You lost the game!'
        }
    }
})