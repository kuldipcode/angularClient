var myAAp = angular.module("sampleAAp",[]);

myAAp.controller("myCtrl2",function($scope,$http){


$scope.showInfo = function(){
	var userName = $scope.uName;
	
	$http({
		url:'https://api.github.com/users/'+userName+'',
		method:"GET",
		dataType : 'json'	
	})
	.success(function(resp){
		console.log(resp);
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

	$http({
		url:'https://api.github.com/users/'+userName+'/repos',
		method:"GET",
		dataType : 'json'	
	})
	.success(function(resp){
		console.log(resp);
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
$scope.showInfo();
});