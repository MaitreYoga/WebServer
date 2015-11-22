<?php header('Access-Control-Allow-Origin: *'); ?>

<!DOCTYPE html>
<html ng-app = "ZenLounge">
	<head>
		<meta charset="UTF-8">

        <script src="Dependencies/angular.js"></script>
        <script src="Dependencies/jquery-2.1.4.min.js"></script>
        <script src="Dependencies/bower-angular-route/angular-route.js"></script>
        <script src="Dependencies/angular-cookies.js"></script>
        <script src="Dependencies/sha512.js"></script>

        <script src="https://netdna.bootstrapcdn.com/bootstrap/3.0.2/js/bootstrap.min.js"></script>
        <script src="https://code.jquery.com/jquery.js"></script>
        <script src="https://twitter.github.io/bootstrap/assets/js/bootstrap-dropdown.js" type="text/javascript"></script>

        <script src="app.js"></script>

        <script src="InterfaceWeb/appelweb.js"></script>


        <script src="views/common/navbar/navbarCtrl.js"></script>
        <script src="views/users/allUsers/users.js"></script>
        <script src="views/users/editOwnProfile/profile.js"></script>
        <script src="views/users/login/loginController.js"></script>
        <script src="views/shop/products/allProducts/products.js"></script>
        <script src="views/shop/products/product/product.js"></script>
        <script src="views/event/events/allEvents/events.js"></script>
        <script src="views/event/events/createEvent/createEvent.js"></script>
        <script src="views/event/events/event/event.js"></script>
        <script src="views/event/activityCategory/activitycategory.js"></script>
        <script src="views/common/signup/signup.js"></script>
        <script src="views/users/profile/profile.js"></script>
        <script src="views/users/notifications/notifications.js"></script>
        <script src="views/shop/products/manageProducts/manageProducts.js"></script>
        <script src="views/shop/products/brands/productBrand.js"></script>
        <script src="views/shop/products/manageProducts/manageproduct/manageProduct.js"></script>
        <script src="views/event/activity/activities.js"></script>
        <script src="views/event/activity/manageOneActivity/manageOwnActivity.js"></script>
        <script src="views/users/search/search.js"></script>

        <link href="Dependencies/bootstrap/css/bootstrap.min.css" rel="stylesheet">
        <link rel="stylesheet" href="Includes/CSS/style.css"/>
        <link rel="stylesheet" href="Includes/CSS/Bootstrap_CSS/bootstrap.css">
        
        <title>Maitre Yoga</title>
    </head>

    <body>
    <div class="conteneur">
        <nav-bar></nav-bar>
    <div ng-view></div>
    </div>
    </body>
</html>

