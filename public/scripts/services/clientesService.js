
angular.module('clientesApp').service('clientesService', function($http) {
    var clientes = [];
    var tarefas = [];

    var loadClientes = function(callback) {
        $http.get("/clientes")
        .then(function success(response) {
            clientes = response.data;
            callback(clientes);
        }, function error(response) {
            clientes = [{nome: "Erro"}];
        });                   
    };

    var getClientes = function(){
        return clientes;
    };

    var deleteCliente = function(id){
        clientes = clientes.filter((cliente) => cliente._id != id);
        return clientes;
    }

    var getCliente = function(id) {
        return clientes.find((cliente) => cliente._id == id);
    }

    var addCliente = function(cliente) {
        clientes.push(cliente);
    }

//Tarefas
    var loadTarefas = function(callback) {
        $http.get("/tarefas")
        .then(function success(response) {
            tarefas = response.data;
            callback(tarefas);
        }, function error(response) {
            tarefas = [{nome: "Erro"}];
        });                   
    };

    var getTarefas = function(){
        return tarefas;
    };

    var deleteTarefa = function(id){
        tarefas = tarefas.filter((tarefa) => tarefa._id != id);
        return tarefas;
    }

    var getTarefa = function(id) {
        return tarefass.find((tarefa) => tarefa._id == id);
    }

    var addTarefa = function(tarefa) {
        tarefas.push(tarefa);
    }
    return {
        loadClientes: loadClientes,
        getClientes: getClientes,
        deleteCliente: deleteCliente,
        getCliente: getCliente,
        addCliente: addCliente,

        loadTarefas: loadTarefas,
        getTarefas: getTarefas,
        deleteTarefa: deleteTarefa,
        getTarefa: getTarefa,
        addTarefa: addTarefa
    };

});