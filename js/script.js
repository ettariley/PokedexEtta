//Create IIFE pokemonRepository to house pokemonList and necessary functions
let pokemonRepository = (function () {
    //Create array to hold list of pokemon
    let pokemonList = [];
    //Set api URL to a variable 
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

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

    //Console log details of pokemon
    function showDetails(pokemon) {
        //Asyncronous call to load pokemon details and log to console
        loadDetails(pokemon).then(function (){
            console.log(pokemon);
        });
    }

    //Load list of Pokemon from API
    function loadList() {
        //Display loading message
        showLoadingMessage();
        //Fetch api URL
        return fetch(apiUrl).then(function (response) {
            return response.json(); //Parse API JSON data
        }).then(function (json) {
            //Create object in pokemonList for each item
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
                //Remove loading message since data has been loaded
                hideLoadingMessage();
            });
        //Console log if there's an error
        }).catch(function (e) {
            console.error(e);
        })
    }

    //Load details of pokemon (called on button click)
    function loadDetails(item) {
        //Display loading message
        showLoadingMessage();
        //Set URL for details as variable
        let url = item.detailsUrl;
        //Fetch URL & parse JSON data retrieved
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            //Add details to item
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
            //Remove loading message
            hideLoadingMessage();
        //Console log if there's an error
        }).catch(function (e) {
            console.error(e);
        });
    }

    //Display loading message div in index.html
    function showLoadingMessage() {
        let loadingMessage = document.querySelector('.loading-message');
        loadingMessage.classList.toggle('loading-message-hidden');
    }

    //Remove loading message div in index.html
    function hideLoadingMessage() {
        let loadingMessage = document.querySelector('.loading-message');
        loadingMessage.classList.toggle('loading-message-hidden');
    }

    //IIFE function returns
    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showLoadingMessage: showLoadingMessage,
        hideLoadingMessage, hideLoadingMessage
    };

}) ();

//Load list of pokemon from API
pokemonRepository.loadList().then(function () {
    //Loop through each item in array to display details
    pokemonRepository.getAll().forEach(function(pokemon){
        //Add each item to UI
        pokemonRepository.addListItem(pokemon);
    });
})
