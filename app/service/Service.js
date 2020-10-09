class Service {
    constructor(){
        this.http = new HttpService();
        this._urlNeg = 'http://localhost:8080/negociacoes';
    }
    getNegociacoes(){
        return this.http.get(this._urlNeg);
    }
    getNegociacaoById(id){
        return this.http.get(this._urlNeg, id);
    }
    deleteNegociacaoById(id){
        return this.http.delete(this._urlNeg, id);
    }
    insertNegociacao(negociacao){
        return this.http.post(this._urlNeg, negociacao);
    }



}