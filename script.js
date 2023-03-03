'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let  currentSore , score , activePlayer , playing ;


const init = function () {
    diceEl.classList.add('hidden');

    //Rolling dice function
    currentSore = 0;
    score = [0, 0];
    activePlayer = 0;
    playing = true;
    current0El.textContent = 0;
    current1El.textContent = 0;
    score0El.textContent = 0;
    score1El.textContent = 0;

    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');

}
init();


const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentSore = 0;

    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}


btnRoll.addEventListener('click', function () {
    if (playing) {


        // generating dice number from 1 to 6
        const dice = Math.trunc(Math.random() * 6) + 1;
        // displaying dice numbers
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;

        if (dice !== 1) {
            currentSore += dice;

            // if(activeP1){
            //     current0El.textContent = currentSore;
            // }
            // else if(activeP2){
            //     current1El.textContent = currentSore;
            // }

            document.getElementById(`current--${activePlayer}`).textContent = currentSore;


        } else {

            // if(activeP1){
            //     activeP1 = false;
            //     activeP2 = true;
            // } else if(activeP2){
            //     activeP2 = false;
            //     activeP1 = true;
            // }
            switchPlayer();
        }
    }
});

btnHold.addEventListener('click', function () {
    if (playing) {


        score[`${activePlayer}`] += currentSore;
        document.getElementById(`score--${activePlayer}`).textContent = score[`${activePlayer}`];

        if (score[activePlayer] >= 100) {
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            document.getElementById(`current--${activePlayer}`).textContent = 0;
            diceEl.classList.add('hidden');
        } else {
            switchPlayer();
        }
    }
});

btnNew.addEventListener('click', init);


