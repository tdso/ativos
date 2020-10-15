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

    pesquisaAtivos(){
        if (this._negociacoes.length > 0) {
            this._negociacoes.limpa;
            // this.negociacoesView.update(this._negociacoes);
            // this.mensagem.texto = "";
            // this.mensagemView.update(this.mensagem);
        };

        this.service.getNegociacoes()
        .then(dados => {
            dados.map( item => this._negociacoes.adiciona(new Negociacao(item.idAtivo, item.dataOperacao, item.preco, item.quantidade, item.tipoOperacao, item.idNegociacao)));
            this.negociacoesView.update(this._negociacoes);
            this.mensagem.texto = "Pesquisa Efetuada com sucesso";
            this.mensagemView.update(this.mensagem);
            let els = document.getElementsByClassName('trash');
            for (let i = 0; i < els.length; i++){
                els.item(i).addEventListener('click', this.excluiNeg.bind(this.excluiNeg, els.item(i).id));
            }
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
            console.log('excluiu ? ');
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