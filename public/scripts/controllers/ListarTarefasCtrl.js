angular.module('clientesApp').controller('ListarTarefasCtrl', 
                function($scope, $http, $interval, clientesService) {
                
    $scope.refresh = function() {
        clientesService.loadTarefas(function(tarefas) {
            $scope.tarefas = tarefas;
            console.log($scope.tarefas);
        });                 
    }

    $scope.delete = function(id) {
        $http.delete("/tarefas/"+id)
        .then(function success(response) {
            $scope.tarefas = clientesService.deleteTarefa(id);                     
        });
    }

    $scope.refresh()

           
});