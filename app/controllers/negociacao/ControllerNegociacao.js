class ControllerNegociacao {
    
    constructor (){
        this.idAtivo = document.querySelector("#id-ativo");
        this.dataInicio = document.querySelector("#data-pesq-inicio");
        this.dataFim = document.querySelector("#data-pesq-fim");
        this.tipoOperacao = document.querySelector("#tipo-operacao");
        // inclusao
        this.inc_compra = document.querySelector("#inc-compra");
        this.inc_venda = document.querySelector("#inc-venda");
        this.inc_ativo = document.querySelector("#inc-ativo");
        this.inc_qtde = document.querySelector("#inc-qtde");
        this.inc_preco = document.querySelector("#inc-preco");
        this.inc_data = document.querySelector("#inc-data");
        this.inc_msg = new Mensagem();
        this.inc_msg_view = new MensagemView("#inc-msg");
        //
        this._negociacoes = new Negociacoes();
        this.mensagemView = new MensagemView("#msg");
        this.negociacoesView = new NegociacoesView("#negs");
        this.mensagem = new Mensagem();
        this.service = new Service();
    }

    apuraParamsInformados(){
        if (!(this.idAtivo.value.trim() || this.dataInicio.value || this.dataFim.value || this.tipoOperacao.value.trim())){
            return 5;
        } 
        if (this.idAtivo.value.trim() && this.dataInicio.value && this.dataFim.value && this.tipoOperacao.value.trim()){
            return 4;
        } 
        if (this.idAtivo.value.trim() && this.tipoOperacao.value.trim()) {
            if (this.datasInformadas()) {
                return 4;
            }
            return 3;
        }
        if (this.idAtivo.value.trim()) {
            if (this.datasInformadas()) {
                return 22;
            }
            return 2;
        }
        if (this.tipoOperacao.value.trim()) {
            if (this.datasInformadas()) {
                return 11;
            }
            return 1;
        }
        if (this.datasInformadas()){
            return 6;
        }
        return 0;
    }

    datasInformadas(){
        if (this.dataInicio.value && this.dataFim.value ) {
            return true;
        }
        if (!(this.dataInicio.value || this.dataFim.value)){
            return false;
        }
        if (this.dataInicio.value) {
            this.dataFim.value = this.dataInicio.value;
        } else {
            this.dataInicio.value = this.dataFim.value ;
        }
        return true;
    }

    pesquisaAtivos(){
        if (this._negociacoes.negociacoes.length > 0) {
            this._negociacoes.limpa();
        };
        // identificar qual operacao de consulta chamar
        let tipoPesquisa = this.apuraParamsInformados();
        this.service.getNegociacoes(this.idAtivo.value.trim(), this.dataInicio.value,
            this.dataFim.value, this.tipoOperacao.value.trim(), tipoPesquisa)
        .then(dados => {
            if (dados.length <= 0){
                this._negociacoes.limpa();
                this.negociacoesView.update(this._negociacoes);
                this.mensagem.texto = "Pesquisa Não encontrou negociações";
                this.mensagemView.update(this.mensagem);
            } else {
                dados.map( item => this._negociacoes.adiciona(new Negociacao(item.idAtivo, item.dataOperacao, item.preco, item.quantidade, item.tipoOperacao, item.idNegociacao)));
                this.negociacoesView.update(this._negociacoes);
                this.mensagem.texto = "Pesquisa Efetuada com sucesso";
                this.mensagemView.update(this.mensagem);
                let els = document.getElementsByClassName('trash');
                for (let i = 0; i < els.length; i++){
                    els.item(i).addEventListener('click', this.excluiNeg.bind(this.excluiNeg, els.item(i).id));
                }
            }
        })
        .catch(err => {
            console.log('erro na pesquisa');
        });
    }

    incluirAtivos(){
        // formatar campos
        // validar campos
        
        let tipo = this.inc_compra.checked ? 1 : 2
        let neg = new Negociacao(this.inc_ativo.value, this.inc_data.value, parseInt(this.inc_preco.value),
                  parseInt(this.inc_qtde.value), tipo);
        this.service.insertNegociacao(neg)
        .then(dados => {
            this.limpaCamposInclusao();
            this.inc_msg.texto = "Inclusão Efetuada !"
            this.inc_msg_view.update(this.inc_msg);
            this._negociacoes.limpa();
        })
        .catch(err => console.log("Erro inclusao ativo => ", err));
    }

    excluiNeg = id => {
        this.service.deleteNegociacaoById(id.substring(2))
        .then(dados => {
            this.mensagem.texto = "Exclusão Efetuada !";
            this.mensagemView.update(this.mensagem);
            this._negociacoes.limpa();
            this.negociacoesView.update(this._negociacoes);
            this.pesquisaAtivos();
            //this.negociacoesView.update(this._negociacoes);
        })
        .catch(err => console.log("Erro inclusao ativo => ", err));        
    } 

    limpaCamposInclusao(){
        this.inc_ativo.value = "";
        this.inc_data.value = "";
        this.inc_preco.value = "";
        this.inc_qtde.value = "";
        this.inc_compra.checked = true;
    }
    
    fecharModal(){
        this.inc_msg.texto = "";
        this.inc_msg_view.update(this.inc_msg);
        this.pesquisaAtivos();
    }

}