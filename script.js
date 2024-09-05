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
