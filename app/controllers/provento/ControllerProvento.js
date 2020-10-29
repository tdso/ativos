class ControllerProvento {

    constructor() {
        // campos de pesquisa
        this.idAtivo = document.querySelector("#id-ativo");
        this.dataPagto = document.querySelector("#data-pgto");
        this.tipoProv = document.querySelector("#tipo-prov");
        // mensageria consulta
        this.mensagem = new Mensagem();
        this.mensagemView = new MensagemView("#msg");
        // inclusao
        this.inc_tipo = document.querySelector("#inc-tp-prov");
        this.inc_ativo = document.querySelector("#inc-ativo");
        this.inc_data_base = document.querySelector("#inc-dtbase");
        this.inc_data_pgto = document.querySelector("#inc-dtpgto");
        this.inc_valor = document.querySelector("#inc-valor");
        // this.inc_msg_view = new MensagemView("#inc-msg");
        this.service = new ProventoService();
        this.proventos = new Proventos();
    }
    identificaTipoPesquisa(){
        // se nao tiver parametro nenhum
        console.log('this.idAtivo.value = ', this.idAtivo.value);
        console.log('this.dataPagto.value = ', this.dataPagto.value);
        console.log('this.tipoProv.value = ', this.tipoProv.value);
        if (!(this.idAtivo.value.trim() || this.dataPagto.value || this.tipoProv.value > 0)){
            return 1;
        } 
        // se todos foram informados
        if (this.idAtivo.value.trim() && this.dataPagto.value && this.tipoProv.value){
            return 2;
        }
        if (this.dataPagto.value.trim() && this.tipoProv.value){
            return 3;
        }
        if (this.dataPagto.value.trim() && this.idAtivo.value.trim()){
            return 4;
        } 
        if (this.dataPagto.value.trim()){
            return 5;
        } 
        return 0;
    }
    
    periodoValido (){
        let exp = /(0[1-9]|1[012])-(19\d{2}|20\d{2})/;
        return this.dataPagto.value.match(exp);
    }

    validarDadosPesquisa(){
        // apagar a linha de baixo
        if (!this.dataPagto.value) return true;
        if (!this.periodoValido()){
            this.mensagem.texto = "Periodo de Pagamento deve estar no formato MM-AAAA";
            this.mensagemView.update(this.mensagem);
            return false;
        }
        return true;
    }

    pesquisarProventos (){
        if (this.validarDadosPesquisa()){
            let tipoPesquisa = this.identificaTipoPesquisa();
            console.log('tipo de pesquisa = ', tipoPesquisa);
            if (tipoPesquisa === 0){
                this.mensagem.texto = "Para Pesquisar informe mais algum dado !";
                this.mensagemView.update(this.mensagem);
                return;
            }
            this.service.getProventos(this.idAtivo.value, this.dataPagto.value,
                this.tipoProv.value, tipoPesquisa);
        }
    }

    incluirProventos (){
        this.service.insertProvento(this.gerarProvento());
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