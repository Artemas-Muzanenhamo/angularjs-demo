const MovieService = function ($http, $q) {
    let self = this;

    self.getAllMovies = getAllMovies;

    function getAllMovies() {
        $http.get('/api/movies')
            .then(response => console.log(response));
    }
};

export default MovieService;
