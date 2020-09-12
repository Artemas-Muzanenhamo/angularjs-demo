import template from './movie.component.html';
import './movie.component.css';

// TODO: use Movie Service
const MovieComponent = {
    templateUrl: 'app/components/movie/movie.component.html',
    controller: ['$q', MovieController],
    controllerAs: 'movieCtrl'
}

function MovieController() {
    const self = this;

    self.title = () => 'Movie Title';
}

export default MovieComponent;
