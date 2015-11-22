/**
 * Created by jorismaillet on 06/11/15.
 */
angular.module('ZenLounge').controller('SignUpController', ['$scope','webcallservice', function($scope, webcallservice){
	$scope.user = new Object();
    $scope.user.login=null;
    $scope.user.id=null;
    $scope.user.connectiontoken=null;
    $scope.user.firstname=null;
    $scope.user.lastname=null;
    $scope.user.phonenumber=null;
    $scope.user.mailadress=null;
    $scope.user.idadress=null;
    $scope.user.password=null;
    $scope.user.idmember=null;
    $scope.user.idspeaker=null;
    $scope.user.idadministrator=null;
    $scope.user.idmanager=null;

    $scope.addUser = function() {
		$scope.user.password = CryptoJS.SHA512($scope.user.pwd).toString(CryptoJS.enc.Hex);
		delete $scope.user.pwd;
		delete $scope.user.pwd2;
		webcallservice.addUser($scope.user,function(data) {
			$scope.errorMessage = data.errorMessage;
			if(data.successMessage !== null && data.successMessage !== undefined)
				alert(data.successMessage);
		})
	};
}]);