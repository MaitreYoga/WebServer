/**
 * Created by lucasesteban on 04/11/15.
 */
angular.module('ZenLounge').controller('NavbarController', ['$scope','webcallservice','$cookies','$rootScope', function($scope, webcallservice,$cookies,$root){
    $root.user=$cookies.getObject('user');
	
	$scope.cookiesInfos = ($cookies.get("cookiesInfos") === undefined);
	
	$scope.hideCookiesInfos = function(){
		$scope.cookiesInfos = false;
		$cookies.put("cookiesInfos",false);
	};
}]);