const controller = new ControllerNegociacao();
document.querySelector("#bt-pesquisar").addEventListener('click', controller.pesquisaAtivos.bind(controller));
