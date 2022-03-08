const numberOfFilms = +prompt('Сколько фильмов Вы посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt ('Последний посмотренный фильм?', ''),
      b = prompt ('Оценка', ''),
      c = prompt ('Последний посмотренный фильм?', ''),
      d = prompt ('Оценка', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log (personalMovieDB);