class NegociacoesView extends View{
  
    template(model){
        if (model.negociacoes.length === 0) return ``;
        return(`
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Ativo</th>
                        <th scope="col">Data Operação</th>
                        <th scope="col">Qtde</th>
                        <th scope="col">Preço</th>
                        <th scope="col">Operação</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    ${model.negociacoes.map( (neg, i) => {
                        return `
                            <tr>
                                <th scope="row">${neg._id}</th>
                                <td>${neg._ativo}</td>
                                <td>${DataFormat.toDisplay(neg._dataOperacao)}</td>
                                <td>${neg.quantidade}</td>
                                <td>${neg._preco}</td>
                                <td>${neg._tipoOperacao}</td>
                                <td ><img class="trash" src="./app/ui/assets/excluir.png" id="k-${neg._id}" ></td>
                            </tr>
                        `;
                    })}
                </tbody>
            </table>
        `);
    }
}