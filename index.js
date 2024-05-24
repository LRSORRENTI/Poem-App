
const fetchpoemButton = document.getElementById('fetch-poem');
const saveFavoriteButton = document.getElementById('save-favorite');
const toggleFavoritesButton = document.getElementById('toggle-favorites');
const poemDiv = document.getElementById('poem');
const favoriteList = document.getElementById('favorite-list');
const favoritesh2 = document.getElementById('favorites-h2');

fetchpoemButton.addEventListener('click', function () {
    const rand = Math.ceil(Math.random() * 5);
    // fetch('https://poetrydb.org/linecount/3/lines.json')
    fetch(`https://poetrydb.org/linecount/${rand}/lines.json`)
        .then(response => response.json())
        .then(data => {
            const poems = data;
            const randompoem = poems[Math.floor(Math.random() * poems.length)].lines;
            let poemHTML = '<pre>';
            randompoem.forEach(line => {
                poemHTML += `${line}\n`;
            });
            poemHTML += '</pre>';
            poemDiv.innerHTML = poemHTML;
            saveFavoriteButton.style.display = 'block';
            saveFavoriteButton.dataset.poem = poemHTML;
        })
        .catch(error => {
            console.error('Error fetching poem:', error);
            poemDiv.innerText = 'Failed to fetch poem';
        });
});

saveFavoriteButton.addEventListener('click', function () {
    const poem = this.dataset.poem;
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites.push(poem);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoriteList();
});

toggleFavoritesButton.addEventListener('click', function () {
    const favoriteListDiv = document.getElementById('favorite-list');
    const paperDiv = document.getElementById('paper-div');
    // const favoritesh2 = document.getElementById('favorites-h2'); 
    if (favoriteListDiv.style.display === 'none' || favoriteListDiv.style.display === '') {
        favoriteListDiv.style.display = 'block';
        paperDiv.style.display = 'none';
        toggleFavoritesButton.textContent = 'Hide Favorites';
    } else {
        favoriteListDiv.style.display = 'none';
        paperDiv.style.display = 'block';
        toggleFavoritesButton.textContent = 'Show Favorites';
    }
});


function updateFavoriteList() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favoriteList.innerHTML = '';
    favorites.forEach((poem, index) => {
        const li = document.createElement('li');
        li.innerHTML = poem;
        const removeButton = document.createElement('button');
        removeButton.innerText = 'Remove';
        removeButton.onclick = function () {
            favorites.splice(index, 1);
            localStorage.setItem('favorites', JSON.stringify(favorites));
            updateFavoriteList();
        };
        li.appendChild(removeButton);
        favoriteList.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', updateFavoriteList);