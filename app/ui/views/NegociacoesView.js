class NegociacoesView extends View{
  
    template(model, cb){
        console.log("template = ", cb);
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
                        console.log('objeto', neg, "index = ", i);
                        let key = 'neg-' + i;
                        let key2 = 'n' + i;
                        return `
                            <tr>
                                <th scope="row">${neg._id}</th>
                                <td>${neg._ativo}</td>
                                <td>${neg._dataOperacao}</td>
                                <td>${neg.quantidade}</td>
                                <td>${neg._preco}</td>
                                <td>${neg._tipoOperacao}</td>
                                <td ><img class="trash" src="./app/ui/assets/excluir.png" id="${key}" ></td>

                            </tr>
                        `;
                    })}
                </tbody>
            </table>
        `);
    }
}