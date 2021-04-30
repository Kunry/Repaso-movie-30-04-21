// Iteration 1: All directors? - Get the array of all directors.

const getAllDirectors = (movies) => {
  const allDirectors = movies.map((movie) => movie.director); // ['pepe', 'pepe, ....];
  return allDirectors;
};

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = (moviesPepe) => {
  const StevenSpielbergDramaMovies = moviesPepe.filter((moviePepe) => {
    return (
      moviePepe.director === 'Steven Spielberg' &&
      moviePepe.genre.includes('Drama')// moviePepe.genre.indexOf('Drama') !== -1  
    ); 
  });
  return StevenSpielbergDramaMovies.length;
};

// function howManyMovies() {
//   const StevenSpielbergDramaMovies = moviesPepe.filter((moviePepe) => {
//     return (
//       moviePepe.director === 'Steven Spielberg' &&
//       moviesPepe.genre.includes('Drama')// moviePepe.genre.indexOf('Drama') !== -1  
//     ); 
//   });
//   return StevenSpielbergDramaMovies;
// }

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = (movies) => {
  if (movies.length === 0) {
    return 0;
  }

  const sumAllRate = movies.reduce((rates, movie) => { // rates === acc; movie === element
    if (movie.rate) {
      rates += movie.rate;
    }
    return rates;
  }, 0);

  return Number((sumAllRate / movies.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = (movies) => {
  const copyMovies = [...movies];
  copyMovies.sort((movieA, movieB) => { 
    if (movieA.year === movieB.year) {
      return movieA.title.localeCompare(movieB.title); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
    } else if (movieA.year > movieB.year) { // movieA.year - movieB.year
      return 1 
    } else {
      return -1
    };
  })
  return copyMovies;
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

const calculateMinutes = (time) => { // time === "2h" || time === "53min"
  const intTime = parseInt(time);
  if (time.includes('h')) {
    return intTime * 60;
  } 
    return intTime;
}

const calculateTime = (duration) => {
  const arrayTime = duration.split(' ');
  return arrayTime.reduce((mins, time) => {
    return mins + calculateMinutes(time);
  }, 0)
}

const turnHoursToMinutes = (movies) => {
  const timeMovies = movies.map((movie) => {
    const copyMovie = Object.assign({}, movie);
    copyMovie.duration = calculateTime(movie.duration);
    return copyMovie;
  });
  return timeMovies;
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
