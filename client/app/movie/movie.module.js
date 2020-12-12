import MovieComponent from "./movie.component";

const MovieModule = angular
    .module('movie', [])
    .component('movieComponent', MovieComponent);

export default MovieModule;