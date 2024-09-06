document.addEventListener("DOMContentLoaded", function() {
  // Get the search input element
  const searchInput = document.querySelector(".search-input");

  // Get the show-all button and all movie elements
  const showAllButton = document.querySelector(".show-all");
  const movieElements = document.querySelectorAll(".flex-row-f > div");
  const movieTitles = document.querySelectorAll(".with-ariana-gran, .with-ariana-gran-a, .with-ariana-gran-b");

  // Add a listener to the search input
  searchInput.addEventListener("input", function() {
    const query = searchInput.value.toLowerCase();

    movieElements.forEach((movie, index) => {
      const title = movieTitles[index].textContent.toLowerCase();
      if (title.includes(query)) {
        movie.style.display = "block"; // Show matching movie
        movieTitles[index].style.display = "block"; // Show matching title
      } else {
        movie.style.display = "none"; // Hide non-matching movie
        movieTitles[index].style.display = "none"; // Hide non-matching title
      }
    });
  });

  // Handle the "Show all" button functionality
  showAllButton.addEventListener("click", function() {
    movieElements.forEach((movie) => {
      movie.style.display = "block"; // Show all movies
    });
    movieTitles.forEach((title) => {
      title.style.display = "block"; // Show all titles
    });
    searchInput.value = ""; // Clear the search input
  });
});
