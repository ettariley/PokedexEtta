// Add three pokemon and relevant information to an array.
let pokemonList = [
    { name: 'Butterfree', height: 1.1, type: ['bug', 'flying'] },
    { name: 'Oddish', height: 0.5, type: ['grass', 'poison'] },
    { name: 'Haunter', height: 1.6, type: ['ghost', 'poison'] }
];

//Write to index.html page to verify information added to array.
document.write(`My first pokemon is ${pokemonList[0].name}. 
Its height is ${pokemonList[0].height} meters 
and its types are ${pokemonList[0].type[0]} and ${pokemonList[0].type[1]}.`);

document.write('<br>');

document.write(`My second pokemon is ${pokemonList[1].name}. 
Its height is ${pokemonList[1].height} meters 
and its types are ${pokemonList[1].type[0]} and ${pokemonList[1].type[1]}.`);

document.write('<br>');

document.write(`My third pokemon is ${pokemonList[2].name}. 
Its height is ${pokemonList[2].height} meters 
and its types are ${pokemonList[2].type[0]} and ${pokemonList[2].type[1]}.`);