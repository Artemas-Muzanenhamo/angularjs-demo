import 'bootstrap-css-only';
import 'normalize.css';
import angular from 'angular';
import MovieModule from "./movie/movie.module";

angular
    .module('app', [
        MovieModule.name
    ]).component('appComponent', {
        templateUrl: 'app/app.html'
    });
