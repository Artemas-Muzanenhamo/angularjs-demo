import './movie.component.css';

// TODO: use Movie Service
const MovieComponent = {
    templateUrl: 'app/components/movie/movie.component.html',
    controller: ['MovieService', MovieController],
    controllerAs: 'movieCtrl'
}

function MovieController() {
    const self = this;

    self.title = () => 'Movie Title';
}

export default MovieComponent;
