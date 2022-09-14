const movies = require("./data.js");

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const rawListDirectors = moviesArray.map((movie) => movie.director);
  const cleanListDirectors = rawListDirectors.filter((director, index) => {
    return rawListDirectors.indexOf(director) === index;
  });
  return cleanListDirectors;
}
//console.log(`A list of directors ${getAllDirectors(movies)}`);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = (moviesArray) => {
  let totalDramasSpielberg = 0;
  const moviesDirectedSpielberg = moviesArray.filter(
    (movie) => movie.director === "Steven Spielberg"
  );
  moviesDirectedSpielberg.filter((spMovie) => {
    if (spMovie.genre.includes("Drama")) {
      return totalDramasSpielberg++;
    }
  });
  return totalDramasSpielberg;
};

//console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  const allScores = moviesArray.map((movie) => movie.score);
  let sumScores = 0;
  allScores.forEach((score) => (sumScores += score));
  const avgScore = sumScores / movies.length;
  return avgScore.toFixed(2);
}

//console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let dramaMoviesScoresSum = 0;
  const allDramaMoviesScores = moviesArray
    .filter((movie) => movie.genre.includes("Drama"))
    .map((dramaMovie) => dramaMovie.score);

  allDramaMoviesScores.forEach((score) => (dramaMoviesScoresSum += score));
  const avgScoreDramaMovies =
    dramaMoviesScoresSum / allDramaMoviesScores.length;
  return avgScoreDramaMovies.toFixed(2);
}

//console.log(dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const arrToSort = [...moviesArray];
  return arrToSort.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year > b.year ? 1 : -1;
    } else {
      return a.title > b.title ? 1 : -1;
    }
  });
}

//console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const arrayOnly20Titles = moviesArray
    .splice(0, 20)
    .map((movie) => movie.title);

  const result =
    arrayOnly20Titles.length < 20
      ? moviesArray.map((movie) => movie.title).sort()
      : arrayOnly20Titles.sort();

  return result;
}

//console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const moviesDurationArray = moviesArray.map((movie) => movie.duration);
  console.log(moviesDurationArray);
}

log;

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
