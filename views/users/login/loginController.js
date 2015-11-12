/**
 * Created by jorismaillet on 09/11/15.
 */
angular.module('ZenLounge').controller('LoginController', ['$scope', 'webcallservice', function($scope, webcallservice){
	$scope.username = "";
	$scope.pwd = "";
	$scope.login = function() {
		$scope.hashpwd = CryptoJS.SHA512($scope.pwd).toString(CryptoJS.enc.Hex);
		webcallservice.login(
			$scope.username,
			$scope.hashpwd,
			function(successresponse){
				if(	successresponse === undefined || successresponse === null ||
					successresponse.data === undefined || successresponse.data === null ||
					successresponse.data.connectiontoken === undefined || successresponse.data.connectiontoken === null) //A ameliorer !!
				{
					$scope.errorMessage = "Wrong informations";
				}
				else
				{
					$scope.errorMessage = "";
					alert("Connected !");
				}
			},
			function(errorResponse){
				$scope.errorMessage = "Error from server";
		});
	};
}]);