class btn4Service {

    constructor($http) {
        this.$http = $http;
    }

    create(data) {
        return this.$http.post('/api/btn4s', data )
    }

    getAll() {
        return this.$http.get('/api/btn4s');
    }

    getOne(id) {
        return this.$http.get('/api/btn4s/' + id)
    }

    update(id, data) {
        return this.$http.put('/api/btn4s/' + id, {
          texte1: data.texte1,
          texte2: data.texte2,
          texte3: data.texte3
        })
    }

    delete(id) {
        return this.$http.delete('/api/btn4s/' + id)
    }

}
