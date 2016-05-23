var myAAp = angular.module("sampleAAp",['demo.errorHandler']);

// Controller
myAAp.controller("myCtrl2",function($scope,httpService,repoService){

// User click event 	
$scope.showInfo = function(){
	httpService.getUsernameInfo($scope.uName).success(function(resp){
		 $scope.id = resp.id;	
		 $scope.login = resp.login;		
		 $scope.name = resp.name;		
		 $scope.company = resp.company;
		 $scope.location = resp.location;
		 $scope.email = resp.email;					
	})
	.error(function(resp){
		console.log(resp);
	});	

	repoService.getReponameInfo($scope.uName).success(function(resp){
		$scope.rId = resp[0].id;	
		$scope.rName = resp[0].name;
		$scope.rFull = resp[0].full_name;		
		$scope.rOlogin = resp[0].owner.login;	
		$scope.rOid = resp[0].owner.id;
		$scope.rOurl = resp[0].owner.url;				
	})
	.error(function(resp){
		console.log(resp);
	});		
   };
});

myAAp.config(function (errorHandlerProvider, $provide) {
		errorHandlerProvider.decorate($provide, ['httpService']);
	})

// Factory for Username Info 
myAAp.factory('httpService', function($http, $log){
	return {
  	getUsernameInfo:function(uName, callback){
  		
  		var request = $http.get('https://api.github.com/users/'+uName+'',{
		method:"GET",
		dataType : 'json'	
	})
  		return request;	
   }
  };             
});

myAAp.config(function (errorHandlerProvider, $provide) {
		errorHandlerProvider.decorate($provide, ['repoService']);
	})

// Factory for Repo Info

myAAp.factory('repoService', function($http, $log){

  return {
  	getReponameInfo:function(uName, callback){
  		var request = $http.get('https://api.github.com/users/'+uName+'/repos',{
		method:"GET",
		dataType : 'json'	
	})
  		return request;	
   }
  };             
});