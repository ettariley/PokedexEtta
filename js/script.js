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

    //Create a button list name of pokemon from pokemonList array
    function addListItem(pokemon) {
        //Assign a variable to the <ul> element in index.html
        let pokemonListDisplay = document.querySelector('.pokemon-list');

        //Create list item element
        let listItem = document.createElement('li');
        //Create button element
        let button = document.createElement('button');
        //Assign button's inner text to pokemon's name
        button.innerText = pokemon.name;
        //Add pokemon-button class to the button
        button.classList.add('pokemon-button');
        //Append button to list item
        listItem.appendChild(button);
        //Append list item to list
        pokemonListDisplay.appendChild(listItem);
        //Click listener for button that calls showDetails function
        button.addEventListener('click', function() {
            showDetails(pokemon);
        });
    }

    //Console log pokemon name
    function showDetails(pokemon) {
        console.log(pokemon.name);
    }

    //IIFE function returns
    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        showDetails: showDetails
    };

}) ();

//Loop through each item in array to display details
pokemonRepository.getAll().forEach(pokemonRepository.addListItem);