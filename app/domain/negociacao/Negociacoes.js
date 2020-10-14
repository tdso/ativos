class Negociacoes {
    constructor(){
        this._negociacoes = [];
    }
    adiciona(neg){
        this._negociacoes.push(neg);
    }
    limpa(){
        this._negociacoes.length = 0;
    }
    get negociacoes(){
        return [].concat(this._negociacoes);
    }
    
}