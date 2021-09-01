import { getRandomPokes } from './render-pokes-utils.js';
import { renderPoke } from './render-pokes.js';
import { findById } from './render-pokes-utils.js';
import pokeData from './data.js';

export function render3Pokes() {
    let pokeArray = getRandomPokes(pokeData);
    for (let poke of pokeArray) {
        const pokeDiv = renderPoke(poke);

        const pokeContainer = document.getElementById('poke-container');
        pokeContainer.append(pokeDiv);
        encounterPokemon(poke);
    }
}

export function setPokedex(deck) {

    const stringifiedPokedex = JSON.stringify(deck);
    localStorage.setItem('DECK', stringifiedPokedex);
}

export function getPokedex() {
    const stringifiedPokedex = localStorage.getItem('DECK');
    let pokedex = JSON.parse(stringifiedPokedex);
    if (!pokedex) {
        pokedex = [];
    }
    return pokedex;
}

export function catchPokemon(id) {
    //I'm gonna get the pokedex, then I'm going to compare this id to the ids
    //in the pokedex. If I get a match, I increment the caught value of 
    //the poke object. If not, I create an object with my id.
    const pokedex = getPokedex();
    
    
    const pokeObj = findById(pokedex, id);
    
    pokeObj.caught++;
    setPokedex(pokedex);
}

export function encounterPokemon(id) {
    const pokedex = getPokedex();
    
    const pokeObj = findById(pokedex, id);
    if (!pokeObj) {
        const newPokeObj = {
            id: id,
            encounters: 1,
            caught: 0
        };
        pokedex.push(newPokeObj);
    } else {
        pokeObj.encounters++;
    }
    setPokedex(pokedex);
}