import angular from 'angular';
import MovieModule from "./movie/movie.module";

const ComponentsModule = angular.module('app.components', [
    MovieModule.name
]);

export default ComponentsModule;
