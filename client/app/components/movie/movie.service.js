function MovieService($http, $q) {
    let self = this;

    self.getAllMovies = getAllMovies;

    function getAllMovies() {
        return $http.get('/api/movies')
            .then((response) => response)
            .then(response => console.log(response))
            .catch($q.reject());
    }
}

export default MovieService;
