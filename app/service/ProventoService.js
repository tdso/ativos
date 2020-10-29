class ProventoService {
    constructor(){
        this.http = new HttpService();
        this._urlNeg = 'http://localhost:8080/provento';
    }
    getProventos(ativo, datapgto, provento, tipo){
        console.log('tipo = ', tipo);
        console.log('ativo = ', ativo);
        console.log('datapgto = ', datapgto);
        console.log('provento = ', provento);
        switch(tipo){
            case 1:
                return this.http.get(this._urlNeg);
            case 2:
                console.log('pesquisa = 2');
                return this.http.get(this._urlNeg + `/${datapgto}/${ativo}/${provento}`);
            case 3:
                return this.http.get(this._urlNeg + `/tipo/${datapgto}/${provento}`);
            case 4:
                return this.http.get(this._urlNeg + `/ativo/${datapgto}/${ativo}`);
            case 5:
                return this.http.get(this._urlNeg + `/${datapgto}`);
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