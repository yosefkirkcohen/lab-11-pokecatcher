// poke1El = document.getElementById('poke1');
// poke2El = document.getElementById('poke2');
// poke3El = document.getElementById('poke3');

import pokeData from './data.js';
import { findById } from './render-pokes-utils.js';
import { encounterPokemon } from './utils.js';

//find object from pokeData that shares pokeId. Then use object properties to
//assign image and name
//Need function find by id



export function renderPoke(pokeId) {
    const pokeLabel = document.createElement('label');
    const image = document.createElement('img');
    const input = document.createElement('input');
    const pokeName = document.createElement('p');

    const pokeObj = findById(pokeData, pokeId);

    input.name = 'pokeInput';
    input.type = 'radio';
    input.value = pokeObj.id;
    image.src = pokeObj['url_image'];
    pokeName.textContent = pokeObj.pokemon;

    pokeLabel.append(input, image, pokeName);


    return pokeLabel;
}
