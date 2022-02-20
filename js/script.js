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
            let modalContainer = document.querySelector('#modal-container');

            //Clear existing content
            modalContainer.innerHTML = '';
    
            let modal = document.createElement('div');
            modal.classList.add('modal');
    
            //Add new modal content
            let closeButtonElement = document.createElement('button');
            closeButtonElement.classList.add('modal-close');
            closeButtonElement.innerText = 'X';
            closeButtonElement.addEventListener('click', hideModal);
    
            let titleElement = document.createElement('h1');
            titleElement.innerText = pokemon.name;
    
            let contentElement = document.createElement('p');
            contentElement.innerText = 'Height: ' + pokemon.height;
    
            let imageElement = document.createElement('img');
            imageElement.src = pokemon.imageUrl;
    
            modal.appendChild(closeButtonElement);
            modal.appendChild(titleElement);
            modal.appendChild(contentElement);
            modal.appendChild(imageElement);
            modalContainer.appendChild(modal);
    
            modalContainer.classList.add('is-visible');
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
