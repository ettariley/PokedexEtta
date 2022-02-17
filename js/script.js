//Write name and height to index.html
for (let i = 0; i < pokemonList.length; i++) {
    document.write(`${pokemonList[i].name}: <br> 
    Height: ${pokemonList[i].height} meters`);
//Create IIFE pokemonRepository to house pokemonList and necessary functions
let pokemonRepository = (function () {
    //Create array that includes three pokemon and required details
    let pokemonList = [
        { name: 'Butterfree', height: 1.1, type: ['bug', 'flying'] },
        { name: 'Oddish', height: 0.5, type: ['grass', 'poison'] },
        { name: 'Haunter', height: 1.6, type: ['ghost', 'poison'] }
    ];

    //add pokemon to list
    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    //retrieve list of pokemon
    function getAll() {
        return pokemonList;
    }

    //IIFE function returns
    return {
        add: add,
        getAll: getAll
    };

}) ();


    // Print "Wow, that's big!" next to any pokemon with a height greater than 1.2 meters
    pokemonList[i].height > 1.2 ? document.write(' - Wow, that\'s big\!<br><br>') : document.write('<br><br>');
}