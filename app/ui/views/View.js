class View {
    constructor (seletor){
        this._elemento = document.querySelector(seletor);
    }
    
    update (model, cb){
        this._elemento.innerHTML = this.template(model, cb);
    }
}
