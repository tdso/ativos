class ProventoService {
    constructor(){
        this.http = new HttpService();
        this._urlNeg = 'http://localhost:8080/provento';
    }
    getProventos(ativo, datapgto, provento, tipo){
        switch(tipo){
            case 5:
                return this.http.get(this._urlNeg);
            case 6:
                return this.http.get(this._urlNeg + `${datapgto}`);
            case 22:
                return this.http.get(this._urlNeg + `${datapgto}/${ativo}/${provento}`);
            case 32:
                return this.http.get(this._urlNeg + `/ativo/${datapgto}/${ativo}`);
            case 42:
                return this.http.get(this._urlNeg + `/tipo/${datapgto}/${provento}`);
            default:
                console.log("Erro > Tipo de Pesquisa nao identificado para provento !!"); 
        } 
    }
    
    deleteProventoById(id){
        return this.http.delete(this._urlNeg, id);
    }

    insertProvento(provento){
        return this.http.post(this._urlNeg, 
            {
             ativo: provento.ativo,
             dataBase: provento.dataBase,
             dataPagamento: provento.dataPagamento,
             tipoProvento: provento.tipoProvento,
             valor: provento.valor            
            }
        );
    }



}