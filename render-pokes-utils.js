// import pokeData from './data.js';


export function findById(pokeArray, pokeId) {
    
    for (let poke of pokeArray) {
        if (poke.id === pokeId) {
            return poke;
        }
    }
}

//I will get my array of 3 random Pokes, and then send that to app.js where
//I will run a for loop on the array, rendering each item

// I want to receive an array of 3 
export function getRandomPokes(pokeData) {
    let index1 = Math.floor(Math.random() * pokeData.length);
    let index2 = Math.floor(Math.random() * pokeData.length);
    let index3 = Math.floor(Math.random() * pokeData.length);

    while (index1 === index2 || index1 === index3 || index2 === index3) {
        index1 = Math.floor(Math.random() * pokeData.length);
        index2 = Math.floor(Math.random() * pokeData.length);
        index3 = Math.floor(Math.random() * pokeData.length);
    }

    return [
        pokeData[index1].id,
        pokeData[index2].id,
        pokeData[index3].id 
    ];
}