/**
 * Created by jorismaillet on 09/11/15.
 */
angular.module('ZenLounge').controller('LoginController', ['$scope', 'webcallservice','$cookies','$rootScope','$route',function($scope, webcallservice,$cookies,$root,$route){
    $root.loggedUser=$cookies.getObject('loggedUser');
    //alert($root.loggedUser.firstName);

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
                    $cookies.putObject('loggedUser',successresponse.data);
                    alert($cookies.get('loggedUser'));
                    $root.loggedUser = $cookies.getObject('loggedUser');
                    alert($root.loggedUser);
                    $route.reload();
				}
			},
			function(errorResponse){
                alert('connection failed' + errorResponse);
                redirectTo('/')
		});
	};
    $scope.logOut = function() {
        $root.loggedUser= null;
        $cookies.remove('loggedUser');
        $route.reload();
    }

}]);