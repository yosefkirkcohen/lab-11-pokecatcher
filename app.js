// import functions and grab DOM elements
import { setPokedex } from './utils.js';
import { getPokedex } from './utils.js';
import { catchPokemon } from './utils.js';
import { render3Pokes } from './utils.js';


// initialize global state


// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state


const catchButton = document.getElementById('catch');

render3Pokes();
let timesPlayed = 1;


catchButton.addEventListener('click', () => {
    timesPlayed++;

    const caughtPoke = document.querySelector('input:checked');
    const pokeId = Number(caughtPoke.value); 

    catchPokemon(pokeId);
    
    if (timesPlayed > 10) {
        window.location = './results';
    }
    const pokeContainer = document.getElementById('poke-container');
    const childDivs = pokeContainer.children;
    childDivs[0].remove();
    childDivs[0].remove();
    childDivs[0].remove();
    
    render3Pokes();
});

