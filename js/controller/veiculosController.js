var app = angular.module('teste', ['ui.bootstrap']);

app.controller('veiculosController', ['$scope', '$http', function ($scope, $http) {

    $scope.cores = [
      {nome: "Branco"},
      {nome: "Preto"},
      {nome: "Prata"}
    ];

    $scope.veiculos = [
      {carro: "Fox", dataCompra: "01/02/2008", cor: {nome: "Prata"}, marca: "Volwswagen"},
      {carro: "Vectra", dataCompra: "02/01/2003", cor: {nome: "Branco"}, marca: "Chevrolet"},
      {carro: "Cruze", dataCompra: "01/06/2013", cor: {nome: "Prata"}, marca: "Chevrolet"},
      {carro: "Gol", dataCompra: "21/02/2000", cor: {nome: "Branco"}, marca: "Volwswagen"},
      {carro: "Focus", dataCompra: "22/08/2015", cor: {nome: "Preto"}, marca: "Ford"},
      {carro: "Fusion", dataCompra: "14/09/2014", cor: {nome: "Preto"}, marca: "Ford"},
      {carro: "i30", dataCompra: "19/09/2014", cor: {nome: "Branco"}, marca: "Hyundai"},
      {carro: "March", dataCompra: "12/09/2012", cor: {nome: "Prata"}, marca: "Nissan"},
      {carro: "Fiesta", dataCompra: "25/02/2011", cor: {nome: "Prata"}, marca: "Ford"},
      {carro: "Uno", dataCompra: "08/12/2013", cor: {nome: "Preto"}, marca: "Fiat"},
      {carro: "Linea", dataCompra: "18/04/2010", cor: {nome: "Preto"}, marca: "Fiat"}
    ];

    $scope.ordenarConsulta = function (campo) {
      $scope.campoOrdenacaoConsulta   = campo;
      $scope.direcaoOrdenacaoConsulta = !$scope.direcaoOrdenacaoConsulta;
    }

    jQuery(function($){
           $("#editDataCompraFiltroConsulta").mask("99/99/9999");
    });

    /*
    /////////////////////////////////////////////////////////////////
	// PAGINAÇÃO E TABELA                                          //
    /////////////////////////////////////////////////////////////////
    */
    $scope.listagem      = [5,10,30,50];
    $scope.viewby        = 10;
	$scope.totalItems    = $scope.veiculos.length;
	$scope.currentPage   = 1;
	$scope.itemsPerPage  = $scope.viewby;
	$scope.maxSize 		 = 5; //Number of pager buttons to show

	$scope.setPage = function (pageNo) {
		$scope.currentPage = pageNo;
	};

	$scope.setItemsPerPage = function(num) {
	  $scope.itemsPerPage = num;
	  $scope.currentPage  = 1; //reset to first paghe
	}
}]);
