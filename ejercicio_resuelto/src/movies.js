// Iteration 1: All directors? - Get the array of all directors.

const getAllDirectors = (movies) => {
  const directors = movies.map((movie) => {
    const _movie = Object.assign({}, movie); // Explicación con Replit BONUS
    return _movie.director;
  });
  return directors;
};
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = (movies) => {
  const StevenSpielbergDramaMovies = movies.filter((movie) => {
    if (movie.director === 'Steven Spielberg') {
      if (movie.genre.indexOf("Drama") != -1) {
        return true;
      }
    }
  });

  return StevenSpielbergDramaMovies.length;
};

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = (movies) => {
  if (movies.length === 0) {
    return 0;
  }
  const sumAllRate = movies.reduce((rates, movie) => {
    if (movie.rate) {
      rates += movie.rate;
    }
    return rates;
  }, 0);
  const averageMovie = sumAllRate / movies.length;
  const averageMovieWithTwoDecimal = Number(averageMovie.toFixed(2));
  return averageMovieWithTwoDecimal;
};

// Iteration 4: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = (movies) => {
  const dramaMovies = movies.filter((movie) => {
    if (movie.genre.includes('Drama')) {
      return true;
    } else {
      return false;
    }
  });
  return ratesAverage(dramaMovies);
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = (movies) => {
  const orderMovies = [...movies].sort((movieA, movieB) => {
    if (movieA.year === movieB.year) {
      return movieA.title.localeCompare(movieB.title);
    }
    return movieA.year - movieB.year;
  });
  return orderMovies;
};

// Iteration 6: Alphabetic Order - Order by title and print the first 20

const orderAlphabetically = (movies) => {
  const _movies = [...movies];
  _movies.sort((movieA, movieB) => movieA.title.localeCompare(movieB.title));
  return _movies.map((movie) => movie.title).slice(0, 20);
};

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

const calculateMinutes = (time) => {
  const intTime = parseInt(time);
  if (time.indexOf('h') != -1) {
    return intTime * 60;
  }
  return intTime;
}
const calculateTime = (time) => {
  const arrayTime = time.split(' ');
  return arrayTime.reduce((mins, time) => {
    return mins + calculateMinutes(time);
  }, 0);
};

const turnHoursToMinutes = (movies) => {
  const _movies = movies.map((movie) => {
    const copyMovie = { ...movie }; // Object.assign({}, movie);
    copyMovie.duration = calculateTime(movie.duration);
    // movie.duration.split(' ').reduce((mins, duration) => {
    //   if (duration.includes('h')) {
    //     mins += Number(duration.replace('h', '')) * 60;
    //   } else if (duration.includes('min')) {
    //     mins += Number(duration.replace('min', ''));
    //   }
    //   return mins;
    // }, 0);
    return copyMovie;
  });
  return _movies;
};

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

const bestYearAvg = (movies) => {
  if (movies.length === 0) {
    return null;
  }
  const yearsAvg = movies.reduce((bestYearRates, movie) => {
    const year = movie.year;
    const rate = movie.rate;
    if (year in bestYearRates) {
      bestYearRates[year] = (bestYearRates[year] + rate) / 2;
    } else {
      bestYearRates[year] = rate;
    }
    return bestYearRates;
  }, {});
  let bestYear = 0;
  for (const year in yearsAvg) {
    const compareBestYear = yearsAvg[bestYear] || 0;
    const compareYear = yearsAvg[year];
    if (compareYear > compareBestYear) {
      bestYear = year;
    } else if (compareBestYear === compareYear) {
      if (year < bestYear) {
        bestYear = year;
      }
    }
  }
  return (
    'The best year was ' +
    bestYear +
    ' with an average rate of ' +
    yearsAvg[bestYear]
  );
};
