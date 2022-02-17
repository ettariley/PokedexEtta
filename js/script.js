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

//List all the name and height of pokemon from pokemonList array
function listAllPokemon(pokemon) {
    document.write(pokemon.name + ' (Height: ' + pokemon.height + ' meters)');

    // Print "Wow, that's big!" next to any pokemon with a height greater than 1.2 meters
    pokemon.height > 1.2 ? document.write(' - Wow, that\'s big!<br><br>') : document.write('<br><br>');
}

//Loop through each item in array to print details
pokemonRepository.getAll().forEach(listAllPokemon);