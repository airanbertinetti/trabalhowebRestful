
angular.module('clientesApp').controller('AlterarClienteCtrl', 
                function($scope, $http, $routeParams, $location, clientesService) {

    //CARREGA CLIENTE AO ENTRAR NO FORM
    $scope.cliente = clientesService.getCliente($routeParams.id);

    //FUNÇÃO DE SUBMETER FORM
    $scope.submitForm = function() {
        $http.put("/clientes/"+$scope.cliente._id, $scope.cliente).
        then(function success(response) {
            $location.path("/")
        });
    }
});