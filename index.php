<!DOCTYPE html>
<html ng-app = "ZenLounge">
	<head>
		<meta charset="UTF-8">
        <script src="Dependencies/angular.js"></script>
        <script src="Dependencies/jquery-2.1.4.min.js"></script>
		<script src="Dependencies/bower-angular-route/angular-route.js"></script>
        <script src="InterfaceWeb/appelweb.js"></script>
        <script src="app.js"></script>
        <script src="views/common/navbar/navbarCtrl.js"></script>
		<script src="views/users/allUsers/users.js"></script>
		<script src="views/users/profile/profile.js"></script>
        <link href="Dependencies/bootstrap/css/bootstrap.min.css" rel="stylesheet">
        <link rel="stylesheet" href="Includes/CSS/style.css"/>
        <link rel="stylesheet" href="Includes/CSS/Bootstrap_CSS/bootstrap.css">
        <script src="http://netdna.bootstrapcdn.com/bootstrap/3.0.2/js/bootstrap.min.js"></script>
        <script src="https://code.jquery.com/jquery.js"></script>
        <script type="text/javascript" src="http://twitter.github.io/bootstrap/assets/js/bootstrap-dropdown.js"></script>
        <title>Maitre Yoga</title>
    </head>


    <body>
    <div class="container">
        <nav-bar></nav-bar>
    <div ng-view></div>
    </div>

    </body>

</html>