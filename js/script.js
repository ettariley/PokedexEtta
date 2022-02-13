// Add three pokemon and relevant information to an array.
let pokemonList = [
    { name: 'Butterfree', height: 1.1, type: ['bug', 'flying'] },
    { name: 'Oddish', height: 0.5, type: ['grass', 'poison'] },
    { name: 'Haunter', height: 1.6, type: ['ghost', 'poison'] }
];

//Write to index.html page to verify information added to array.
for (let i = 0; i < pokemonList.length; i++) {
    document.write(`${pokemonList[i].name}: <br> 
    Height: ${pokemonList[i].height} meters <br>
    Types: ${pokemonList[i].type[0]} and ${pokemonList[i].type[1]}<br><br>`);   
}