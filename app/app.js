const controller = new ControllerNegociacao();

document.querySelector("#bt-pesquisar")
    .addEventListener('click', controller.pesquisaAtivos.bind(controller));

document.querySelector("#bt-incluir")
    .addEventListener('click', controller.incluirAtivos.bind(controller));

document.querySelector("#fecharModal")
    .addEventListener('click', controller.fecharModal.bind(controller));

document.querySelector("#bt-fecharModal")
    .addEventListener('click', controller.fecharModal.bind(controller));
    