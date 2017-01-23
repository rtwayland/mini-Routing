angular.module('miniRouting')
    .controller('ProductsController', function($scope, $stateParams, ProductService) {
      if ($stateParams.id == 'shoes') {
        $scope.productData = ProductService.shoeData;
      } else if ($stateParams.id == 'socks') {
        $scope.productData = ProductService.sockData;
      }
    });
