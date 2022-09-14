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
  const avgScore = sumScores / moviesArray.length;
  return avgScore.toFixed(2);

  //using reduce()
  // const scores = moviesArray.reduce((totalScores, movie) => {
  //   return (totalScores += movie.score);
  // }, 0);
  // const avgScore = scores / moviesArray.length;
  // return avgScore.toFixed(2);
}

//console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let dramaScoresSum = 0;
  const allDramaScores = moviesArray
    .filter((movie) => movie.genre.includes("Drama"))
    .map((dramaMovie) => dramaMovie.score);

  allDramaMoviesScores.forEach((score) => (dramaScoresSum += score));
  const avgScoreDramas = dramaScoresSum / allDramaScores.length;
  return avgScoreDramas.toFixed(2);
  //using reduce()
  // const drama = moviesArray.filter((movie) => movie.genre.includes("Drama"));
  // const scores = drama.reduce((totalScores, movie) => {
  //   return (totalScores += movie.score);
  // }, 0);
  // const avgScoreDrama = scores / drama.length;
  // return avgScoreDrama.toFixed(2);
}

console.log(dramaMoviesScore(movies));

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
  const arrayToModify = [...moviesArray];
  const durationInMinutes = (string) => {
    const stringWithoutLetters = string.replace(/[hmin]/g, "");
    const hoursToMinutes = Number(stringWithoutLetters[0]) * 60;
    const minutes = Number(stringWithoutLetters.slice(2));
    return hoursToMinutes + minutes;
  };

  const result = arrayToModify.forEach((movie) => {
    let duration = movie.duration;
    duration = durationInMinutes(movie.duration);
  });

  return result;
}

console.log(turnHoursToMinutes(movies));

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
