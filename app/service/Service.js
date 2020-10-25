class Service {
    constructor(){
        this.http = new HttpService();
        this._urlNeg = 'http://localhost:8080/negociacoes';
    }
    getNegociacoes(ativo, datade, dataate, op, tipo){
        switch(tipo){
            case 5:
                return this.http.get(this._urlNeg);
            case 4:
                return this.http.get(this._urlNeg + `/${ativo}/${datade}/${dataate}/${op}`);
            case 3:
                return this.http.get(this._urlNeg + `/${ativo}/${op}`);
            case 2:
                return this.http.get(this._urlNeg + `/negativo/${ativo}`);
            case 22:
                return this.http.get(this._urlNeg + `/negativo/${ativo}/${datade}/${dataate}`);
            case 1:
                return this.http.get(this._urlNeg + `/negtipo/${op}`);
            case 11:
                return this.http.get(this._urlNeg + `/negtipo/${op}/${datade}/${dataate}`);
            case 6:
                return this.http.get(this._urlNeg + `/negdata/${datade}/${dataate}`);
            default:
                console.log("Erro > Tipo de Pesquisa nao identificado !!"); 
        }
        
    }
    getNegociacaoById(id){
        return this.http.get(this._urlNeg, id);
    }
    deleteNegociacaoById(id){
        return this.http.delete(this._urlNeg, id);
    }
    insertNegociacao(negociacao){
        return this.http.post(this._urlNeg, 
            {
             idAtivo: negociacao.ativo,
             dataOperacao: negociacao.dataOperacao,
             quantidade: negociacao.quantidade,
             preco: negociacao.preco,
             tipoOperacao: negociacao.tipoOperacao
            }
        );
    }



}