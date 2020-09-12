import MovieComponent from "./movie.component";

const MovieModule = angular.module('movie', [])
    .component('movie', MovieComponent);

export default MovieModule;
