const addMovieModal = document.getElementById('add-modal');
// const addMovieModal = document.querySelector('#add-modal');
// const addMovieModal = document.body.children[1];
// const addMovieButton = document.querySelector('header').lastElementChild;
// const backdropElement = document.body.firstElementChild;
const addMovieButton = document.querySelector('header button');
const backdropElement = document.getElementById('backdrop');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');
const entryTextSection = document.getElementById('entry-text');
const unorderedList = document.getElementById('movie-list');
const deleteMovieModal = document.getElementById('delete-modal');
const cancelDeletionButton = deleteMovieModal.querySelector('.btn--passive');
let confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger');
const movies = [];

const toggleBackdrop = () => {
  backdropElement.classList.toggle('visible');
};
const updateRenderingList = () => {
  entryTextSection.style.display = (movies.length === 0) ? 'block': 'none';
}
const closeMovieDeletionModal = () => {
  toggleBackdrop();
  deleteMovieModal.classList.remove('visible');
};
const deleteMovieHandler = movieId => {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  unorderedList.children[movieIndex].remove();
  closeMovieDeletionModal();
  updateRenderingList();
};
const startDeleteMovieHandler = movieId => {
  deleteMovieModal.classList.add('visible');
  toggleBackdrop();
  confirmDeletionButton.replaceWith(confirmDeletionButton.cloneNode(true));
  confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger');
  cancelDeletionButton.removeEventListener('click', closeMovieDeletionModal);
  cancelDeletionButton.addEventListener('click', closeMovieDeletionModal);
  confirmDeletionButton.addEventListener('click', deleteMovieHandler.bind(null, movieId));
}
const renderNewMovieElement = (id, title, imageUrl, rating) => {
  const newMovieElement = document.createElement('li');
  newMovieElement.className = 'movie-element';
  newMovieElement.innerHTML = `
    <div class="movie-element__image">
      <img src="${imageUrl}" alt="${title}">
    </div>
    <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating}/5 stars</p>
    </div>
  `;
  newMovieElement.addEventListener('click', startDeleteMovieHandler.bind(null, id));
  unorderedList.append(newMovieElement);
}
const closeMovieModal = () => {
  addMovieModal.classList.remove('visible');
}
const showMovieModal = () => {
  addMovieModal.classList.add('visible');
  toggleBackdrop();
}
const clearMovieInput = () => {
  for (const userInput of userInputs) {
    userInput.value = '';
  }
}
const cancelAddMovieHandler = () => {
  closeMovieModal();
  toggleBackdrop();
  clearMovieInput();
}
const addMovieHandler = () => {
  const [title, imageUrl, rating] = userInputs;
  const enteredTitle = title.value;
  const enteredImageUrl = imageUrl.value;
  const enteredRating = rating.value;
  if (enteredTitle.trim() === '' || enteredImageUrl.trim() === '' || enteredRating.trim() === '' || +enteredRating < 1 || +enteredRating > 5){
    alert('Please enter valid values (rating between 1 and 5)');
    return;
  }
  const newMovie = {
    id: Math.random().toString(),
    title: enteredTitle,
    imageUrl: enteredImageUrl,
    rating: enteredRating
  };
  movies.push(newMovie);
  closeMovieModal();
  toggleBackdrop();
  clearMovieInput();
  renderNewMovieElement(newMovie.id, newMovie.title, newMovie.imageUrl, newMovie.rating);
  updateRenderingList();
};
const backdropClickHandler = () => {
  closeMovieModal();
  closeMovieDeletionModal();
  clearMovieInput();
}
addMovieButton.addEventListener('click', showMovieModal);
backdropElement.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);