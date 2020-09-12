import MovieComponent from "./movie.component";
import MovieService from "./movie.service";

const MovieModule = angular.module('movie', [])
    .component('movie', MovieComponent)
    .service('movieService', MovieService);

export default MovieModule;
