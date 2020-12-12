class MovieController {
    message() {
        return 'Movie Component Here';
    }
}

const MovieComponent = {
    templateUrl: 'app/movie/movie.html',
    controller: MovieController,
    controllerAs: 'movie'
};

export default MovieComponent;