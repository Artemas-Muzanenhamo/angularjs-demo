import 'bootstrap-css-only';
import 'normalize.css';
import angular from 'angular';
import appComponent from './app.component';
import ComponentsModule from './components/components';
import MovieModule from "./components/movie-component/movie.module";

angular.module('app', [ComponentsModule.name])
    .component('app', appComponent);
