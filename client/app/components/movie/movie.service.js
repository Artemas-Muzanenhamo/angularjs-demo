function MovieService($http, $q) {
    let self = this;

    self.getAllMovies = getAllMovies;

    function getAllMovies() {
        $http.get('/api/movies')
            .then(response => console.log(response))
            .catch($q.reject());
    }
}

export default MovieService;
