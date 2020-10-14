class Negociacao {
    
    constructor(ativo, data, preco, qtde, tipoOperacao, id = null){
        this._id = id;
        this._ativo = ativo;
        this._dataOperacao =  data;
        this._quantidade = qtde;
        this._preco = preco;
        this._tipoOperacao = tipoOperacao;

    }
    get ativo () {
        return this._ativo;
    }
    get dataOperacao () {
        return this._dataOperacao;
    }
    get quantidade () {
        return this._quantidade;
    }
    get preco () {
        return this._preco;
    }
    get tipoOperacao () {
        return this._tipoOperacao;
    }
    // setter
    set ativo (ativo) {
        this._ativo = ativo;
    }
    set dataOperacao (data) {
        this._dataOperacao = data;
    }
    set quantidade (qt) {
        this._quantidade = qt;
    }
    set preco (preco) {
        this._preco = preco;
    }
    set tipoOperacao (tipo) {
        this._tipoOperacao = tipo;
    }

}