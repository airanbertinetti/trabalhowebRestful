var app = angular.module('clientesApp', ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "../views/menuPrincipal.html",
        controller: "MenuPrincipalCtrl"
    })
    .when("/criarTarefa/:id", {
        templateUrl: "../views/incluirTarefa.html",
        controller: "InserirTarefasCtrl"
    })      
    .when("/listar", {
        templateUrl: "../views/listarClientes.html",
        controller: "ListarClientesCtrl"
    })      
    .when("/alterar/:id", {
        templateUrl: "../views/formAlterar.html",
        controller: "AlterarClienteCtrl"
    })               
    .when("/inserir", {
        templateUrl: "../views/formAlterar.html",
        controller: "InserirClienteCtrl"
    })
    .when("/listarTarefas/:id", {
        templateUrl: "../views/listarTarefas.html",
        controller: "ListarTarefasCtrl"
    })
    .when("/novoPedido/:id", {
        templateUrl: "../views/inserirPedido.html",
        controller: "InserirPedidoCtrl"
    });
})
