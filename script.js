document.getElementById('movies-tab').addEventListener('click', function(event) {
    event.preventDefault();
    showTab('movies-section', 'movies-tab');
});

document.getElementById('series-tab').addEventListener('click', function(event) {
    event.preventDefault();
    showTab('series-section', 'series-tab');
});

function showTab(sectionId, tabId) {
    document.getElementById('movies-section').style.display = 'none';
    document.getElementById('series-section').style.display = 'none';
    document.getElementById('movies-tab').classList.remove('active');
    document.getElementById('series-tab').classList.remove('active');

    document.getElementById(sectionId).style.display = 'block';
    document.getElementById(tabId).classList.add('active');
}

// By default, show the Movies tab
document.getElementById('movies-section').style.display = 'block';

const searchInput = document.getElementById('search-input');
const moviesList = document.getElementById('movies-list');
const seriesList = document.getElementById('series-list');

searchInput.addEventListener('input', function() {
    const filter = searchInput.value.toLowerCase();
    filterList(moviesList, filter);
    filterList(seriesList, filter);
});

function filterList(list, filter) {
    const items = list.getElementsByTagName('li');
    for (let i = 0; i < items.length; i++) {
        let text = items[i].textContent || items[i].innerText;
        if (text.toLowerCase().indexOf(filter) > -1) {
            items[i].style.display = "";
        } else {
            items[i].style.display = "none";
        }
    }
}
