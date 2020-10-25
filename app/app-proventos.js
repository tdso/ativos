const controller = new ControllerProvento();

document.querySelector("#bt-pesquisar")
    .addEventListener('click', controller.pesquisarProventos.bind(controller));

document.querySelector("#bt-incluir")
    .addEventListener('click', controller.incluirProventos.bind(controller));

document.querySelector("#fecharModal")
    .addEventListener('click', controller.fecharModal.bind(controller));

document.querySelector("#bt-fecharModal")
    .addEventListener('click', controller.fecharModal.bind(controller));
    