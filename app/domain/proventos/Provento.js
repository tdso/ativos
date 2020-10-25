class Provento {

    constructor(id, ativo, dataBase, dataPagamento, tipoProvento, valor){
        this._id = id;
        this._ativo = ativo;
        this._dataBase = dataBase;
        this._dataPagamento = dataPagamento;
        this._tipoProvento = tipoProvento;
        this._valor = valor;
    }

    get id (){
        return this._id;
    }
    set id (id){
        this._id = id;
    }

    get ativo (){
        return this._ativo;
    }
    set ativo (at){
        this._ativo = at;
    }

    get dataBase (){
        return this._dataBase;
    }
    set dataBase (dt){
        this._dataBase = dt;
    }

    get dataPagamento () {
        return this._dataPagamento;
    }
    set dataPagamento (dt) {
        this._dataPagamento = dt;
    }

    get tipoProvento () {
        return this._tipoProvento;
    }
    set tipoProvento (p) {
        this._tipoProvento = p;
    }

    get valor () {
        return this._valor;
    }
    set valor (v) {
        this._valor = v;
    }


}