/**
 * Created by jorismaillet on 09/11/15.
 */
angular.module('ZenLounge').controller('LoginController', ['$scope', 'webcallservice','$cookies','$rootScope',function($scope, webcallservice,$cookies,$root){
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
                    $cookies.put('userID',successresponse.data.firstName);
                    $cookies.putObject('user',successresponse.data);
                    alert($cookies.get('user'));
                    $root.user = $cookies.getObject('user');
				}
			},
			function(errorResponse){
                alert('connection failed' + errorResponse);
                redirectTo('/')
		});
	};
    $scope.logOut = function() {
        $root.user= null;
        $cookies.remove('user');
    }

}]);