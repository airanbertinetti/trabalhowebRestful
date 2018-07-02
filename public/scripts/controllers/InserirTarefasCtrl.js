angular.module('clientesApp').controller('InserirTarefasCtrl', 
                function($scope, $http, $location, $routeParams, clientesService) {
            
    $scope.cliente = clientesService.getCliente($routeParams.id);
        
    $scope.submitForm = function() {
        $scope.tarefa.clienteID = $scope.cliente._id
        $http.post("/tarefas", $scope.tarefa).

        then(function success(response) {
            console.log($scope.tarefa);
            $location.path("/")
        });
    }

   
});