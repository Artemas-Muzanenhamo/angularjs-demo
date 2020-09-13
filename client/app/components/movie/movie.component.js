import './movie.component.css';
import MovieService from "./movie.service";

// TODO: use Movie Service
const MovieComponent = {
    templateUrl: 'app/components/movie/movie.component.html',
    controller: ['movieService', MovieController],
    controllerAs: 'movieCtrl'
}

function MovieController(movieService) {
    const self = this;

    self.title = () => 'Movie Title';

    movieService.getAllMovies()
        .catch(error => console.log(error));
}

export default MovieComponent;
