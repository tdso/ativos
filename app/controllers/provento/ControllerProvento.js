class ControllerProvento {

    constructor() {
        this.idAtivo = document.querySelector("#id-ativo");
        this.dataPagto = document.querySelector("#data-pgto");
        this.tipoProv = document.querySelector("#tipo-prov");
        
        // inclusao
        this.inc_tipo = document.querySelector("#inc-tp-prov");
        this.inc_ativo = document.querySelector("#inc-ativo");
        this.inc_data_base = document.querySelector("#inc-dtbase");
        this.inc_data_pgto = document.querySelector("#inc-dtpgto");
        this.inc_valor = document.querySelector("#inc-valor");
        // this.inc_msg = new Mensagem();
        // this.inc_msg_view = new MensagemView("#inc-msg");
        this.service = new ProventoService();
        this.proventos = new Proventos();
    }

    pesquisarProventos (){
        console.log('pesquisa');
    }

    incluirProventos (){
        console.log('incluir');
        let prov = this.gerarProvento();
        this.service.insertProvento(prov);
    }

    gerarProvento(){
        // validar os valores
        return new Provento (
            null,
            this.inc_ativo.value,
            this.inc_data_base.value,
            this.inc_data_pgto.value,
            this.inc_tipo.value,
            this.inc_valor.value
        );
    }

    fecharModal(){
        console.log('pesquisa');
    }
}