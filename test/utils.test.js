// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { setPokedex } from '../utils.js';
import { getPokedex } from '../utils.js';
import { catchPokemon } from '../utils.js';
import { encounterPokemon } from '../utils.js';
import { findById } from '../render-pokes-utils.js';
import { getRandomPokes } from '../render-pokes-utils.js';

const test = QUnit.test;

test('Should take a pokedex and set it to local storage ', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const testArr = [
        { id: 2,
            encounters: 3
        }
    ];
    setPokedex(testArr);

    const stringyActual = localStorage.getItem('DECK');

    const actual = JSON.parse(stringyActual);

    const expected = testArr;
    
    //Act 
    // Call the function you're testing and set the result to a const
    

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('Should get a pokedex with key "DECK" from local storage and parse it ', (expect) => {
    
    const testArr = [
        { id: 2,
            encounters: 3
        }
    ];

    const stringyActual = JSON.stringify(testArr);
    localStorage.setItem('DECK', stringyActual);
    

    const actual = getPokedex();

    const expected = testArr; 

    expect.deepEqual(actual, expected);
});

test('Should take an id and increment the "caught" property of that pokemon in the pokedex ', (expect) => {
    
    const testArr = [
        { id: 2,
            encounters: 3,
            caught: 1
        }
    ];
    setPokedex(testArr);
    catchPokemon(2);

    const actual = getPokedex();

    const expected = [
        { id: 2,
            encounters: 3,
            caught: 2
        }
    ];

    expect.deepEqual(actual, expected);
});

test('Should take an id and increment the "encounter" property of that pokemon in the pokedex ', (expect) => {
    
    const testArr = [
        { id: 2,
            encounters: 3,
            caught: 1
        }
    ];
    setPokedex(testArr);
    encounterPokemon(2);

    const actual = getPokedex();

    const expected = [
        { id: 2,
            encounters: 4,
            caught: 1
        }
    ];

    expect.deepEqual(actual, expected);
});

test('Should create a new object in the pokedex if one with that id is not there', (expect) => {
  
    const testArr = [
        { id: 3,
            encounters: 1,
            caught: 0 }
    ];
    localStorage.removeItem('DECK');
    encounterPokemon(3);    

    const actual = getPokedex();

    const expected = testArr; 

    expect.deepEqual(actual, expected);
});

test('Should return an object with a matching id from the array given', (expect) => {
  
    const testArr = [
        {
            id: 3,
            encounters: 2
        },
        {
            id: 5,
            encounters: 6
        },
        {
            id: 7,
            encounters: 5
        },
    ];

    const actual = findById(testArr, 3);

    const expected = {
        id: 3,
        encounters: 2
    };

    expect.deepEqual(actual, expected);
});

test('Should return 3 random poke ids that do not equal each other', (expect) => {
  
    const testArr = [
        {
            id: 3,
            name: 'pokesaur',
        },
        {
            id: 4,
            name: 'pikachu',
        },
        {
            id: 5,
            name: 'falala',
        },
        {
            id: 6,
            name: 'asdfdf'
        }
    ];

    const testIds = getRandomPokes(testArr);
    console.log(testIds);
    const actual = testIds.length === 3;


    let actual2 = true;
    testIds.forEach((id) => {
        if (typeof id !== 'number') {
            actual2 = false;
        }
    });

    let actual3 = true;
    if (testIds[0] === testIds[1] || testIds[0] === testIds[2] || testIds[1] === testIds[2]) {
        actual3 = false;
    }

    expect.equal(actual, true);
    expect.equal(actual2, true);
    expect.equal(actual3, true);
});

