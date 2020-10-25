class Proventos {
    constructor (){
        this._proventos = [];
    }
    adiciona(prov){
        this._proventos.push(prov);
    }
    limpa(){
        this._proventos.length = 0;
    }
    get proventos(){
        return [].concat(this._proventos);
    }
}