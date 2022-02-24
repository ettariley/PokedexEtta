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
        let pokemonListDisplay = $('.pokemon-list');
        //Create list item element
        let listItem = $('<li class="list-group-item"></li>');
        //Create button element with necessary classes & Pokemon name as text inside
        let button = $('<button class="pokemon-button btn btn-primary btn-block btn-lg text-left" data-toggle="modal" data-target="#pokemon-modal">' + pokemon.name + '</button>');
        //Append button to list item
        listItem.append(button);
        //Append list item to list
        pokemonListDisplay.append(listItem);
        //Click listener for button that calls showDetails function
        button.on('click', function() {
            //Remove any previous pokemon modal information
            $('#pokemon-name').remove();
            $('#pokemon-height').remove();
            $('#pokemon-image').remove();
            //Load modal information
            showDetails(pokemon);
        })
    }

    //Console log details of pokemon
    function showDetails(pokemon) {
        //Asyncronous call to load pokemon details and log to console
        loadDetails(pokemon).then(function (){            
            //Add name as title of modal
            let modalHeader = $('.modal-header');
            let pokemonNameTitle = $('<h5 id="pokemon-name">' + pokemon.name + '</h5>');
            modalHeader.prepend(pokemonNameTitle);

            //Add height and image to body of modal
            let displayHeight = $('<p id="pokemon-height">Height: ' + pokemon.height + '</p>');
            let displayImage = $('<img src="' + pokemon.imageUrl +'" id="pokemon-image" alt="Image of ' + pokemon.name + '">');
            $('.modal-body').append(displayHeight).append(displayImage);
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
        //Console log if there's an error
        }).catch(function (e) {
            console.error(e);
        });
    }

    //Display loading message div in index.html
    async function showLoadingMessage() {
        await pauseThread(500);
        let loadingMessage = document.querySelector('.loading-message');
        loadingMessage.classList.toggle('loading-message-hidden');
    }

    async function pauseThread(ms) {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(), ms)
        })
    }

    //Remove loading message div in index.html
    function hideLoadingMessage() {
        let loadingMessage = document.querySelector('.loading-message');
        loadingMessage.classList.toggle('loading-message-hidden');
    }

    function hideModal() {
        let modalContainer = document.querySelector('#modal-container');
        modalContainer.classList.remove('is-visible');
    }

    window.addEventListener('keydown', (e) => {
        let modalContainer = document.querySelector('#modal-container');
        if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
          hideModal();  
        }
      });

    let modalContainer = document.querySelector('#modal-container');
    modalContainer.addEventListener('click', (e) => {
    // Since this is also triggered when clicking INSIDE the modal
    // We only want to close if the user clicks directly on the overlay
    let target = e.target;
    if (target === modalContainer) {
        hideModal();
    }
    });

    //IIFE function returns
    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        showDetails: showDetails,
        loadList: loadList,
        loadDetails: loadDetails,
        showLoadingMessage: showLoadingMessage,
        hideLoadingMessage, hideLoadingMessage,
        hideModal: hideModal,
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
