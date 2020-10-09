class ControllerNegociacao {
    constructor (){
        this.idAtivo = document.querySelector("#id-ativo");
        this.dataInicio = document.querySelector("#data-pesq-inicio");
        this.dataFim = document.querySelector("#data-pesq-fim");
        this.tipoOperacao = document.querySelector("#tipo-operacao");
        this.service = new Service();
    }
    pesquisaAtivos(){
        console.log("metodo pesquisa ativos acionado");
        console.log("Ativo = ", this.idAtivo.value);
        this.service.getNegociacoes()
        .then(dados => console.log(dados));
    }
}