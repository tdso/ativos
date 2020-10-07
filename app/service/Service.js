class Service {
    constructor(){
        this.http = new HttpService();
    }
    getNegociacoes(url){
        return this.http.get(url);
    }
}