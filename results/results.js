import pokeData from '../data.js';
import { getPokedex } from '../utils.js';
import { findById } from '../render-pokes-utils.js';

const pokedex = getPokedex();

const idsArr = pokedex.map((pokeObj) => {
    return pokeObj.id;
});

const labels = idsArr.map((id) => {
    const pokeObj = findById(pokeData, id);
    const name = pokeObj.pokemon;
    return name;
});

const dataEncounters = pokedex.map((obj) => {
    return obj.encounters;
});

const dataCaught = pokedex.map((obj) => {
    return obj.caught;
});

const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, { // eslint-disable-line
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: 'Number of Encounters',
            data: dataEncounters,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const ctx2 = document.getElementById('myChart2');
const myChart2 = new Chart(ctx2, { // eslint-disable-line
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: 'Number of Captures',
            data: dataCaught,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});