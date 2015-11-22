/**
 * Created by jorismaillet on 06/11/15.
 */
angular.module('ZenLounge').controller('SignUpController', ['$scope','webcallservice', function($scope, webcallservice){
	$scope.user = new Object();
    $scope.addUser = function() {
		$scope.user.hashpwd = CryptoJS.SHA512($scope.user.pwd).toString(CryptoJS.enc.Hex);
		$scope.user.pwd = "";
		$scope.user.pwd2 = "";
        $scope.user.idmember=null;
        $scope.user.id="";
        $scope.user.idadministrator=null;
        /*{"id":"14","connectiontoken":null,"firstname":"SALUT","lastname":"Last Name","phonenumber":null,"mailadress":"mail@mail.com"
            ,"idadress":null,"login":"SALUTsava","password":"salut","idmember":null,"idspeaker":null,"idmanager":null,"idadministrator":null}}*/
		webcallservice.addUser($scope.user,function(data) {
			$scope.errorMessage = data.errorMessage;
			if(data.successMessage !== null && data.successMessage !== undefined)
				alert(data.successMessage);
		})
	};
}]);