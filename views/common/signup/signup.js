/**
 * Created by jorismaillet on 06/11/15.
 */
angular.module('ZenLounge').controller('SignUpController', ['$scope','webcallservice', function($scope, webcallservice){
	$scope.user = new Object();
    $scope.addUser = function() {
		$scope.user.hashpwd = CryptoJS.SHA512($scope.user.pwd).toString(CryptoJS.enc.Hex);
		$scope.user.pwd = "";
		$scope.user.pwd2 = "";
		webcallservice.addUser($scope.user,function(data) {
			$scope.errorMessage = data.errorMessage;
			if(data.successMessage !== null && data.successMessage !== undefined)
				alert(data.successMessage);
		})
	};
}]);