'use strict';
// we can also use Math.trunk to get the integer part only
let randomNumber = 1 + Math.floor(Math.random() * 20);
let remainingGuess = 6;
let highscore = 0;
document.querySelector('.score').textContent = remainingGuess;

document.querySelector('.check').addEventListener('click', function(){
    
    const guessedNumber = Number(document.querySelector('.guess').value);

    // if the user does not enter any number or enter string    
    if(!guessedNumber){
        document.querySelector('.message').textContent = '🚫 No number';
        return;
    }

    remainingGuess--;
    document.querySelector('.score').textContent = remainingGuess;

    // if the remaining guess is zero or lesser
    if(remainingGuess <= 0){
        document.querySelector('.message').textContent = '😩 You lost the game!';
        document.querySelector('.guess').value = null;
        return;
    }

    // if the number you enter matches
    if(guessedNumber === randomNumber){
        document.querySelector('.message').textContent = '🎉 Your guess was correct';
        
        
        document.querySelector('.number').textContent = randomNumber;
        
        document.querySelector('body').style.backgroundColor = '#60b347';
        
        document.querySelector('.number').style.width = '30rem';
        
        if(remainingGuess > highscore){
            highscore = remainingGuess;
        }
        document.querySelector('.highscore').textContent = remainingGuess;
    } 
    else if(guessedNumber > randomNumber){ // if guessed number is greater
        document.querySelector('.message').textContent = '😐 your number is much larger! keep guessing..';

    }
    else if(guessedNumber < randomNumber){ // if guessed number is smaller
        document.querySelector('.message').textContent = '😐 Your number is much smaller! keep guessing..';
    }
    
    document.querySelector('.guess').value = null;
});

document.querySelector('.again').addEventListener('click', ()=>{
    remainingGuess = 6;
    document.querySelector('.score').textContent = remainingGuess;

    randomNumber = 1 + Math.floor(Math.random() * 20);

    document.querySelector('body').style.backgroundColor = '#222';

    document.querySelector('.number').style.width = '15rem';

    document.querySelector('.number').textContent = '?';

    document.querySelector('.message').textContent = 'Start guessing...';
    

});

console.log('Welcome to the site! hope you are enjoying the game');