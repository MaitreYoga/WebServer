angular.module('ZenLounge', ['ngRoute','WebCall','ngCookies'])

    .config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/common/home.html'
        })
        .when('/signUp',
        {
            templateUrl: 'views/common/signup/signup.html'
        })
        .when('/users',
        {
            templateUrl: 'views/users/allUsers/users.html'
        })
        .when('/users/search',
        {
            templateUrl: 'views/users/search/search.html'
        })
        .when('/profile',
        {
            templateUrl: 'views/users/editOwnProfile/user_info.html'
        })
        .when('/users/:id/profile',{
            templateUrl : 'views/users/profile/profile.html'
        })
		 .when('/planningUser',
        {
            templateUrl: 'views/users/planningUser/planning_user.php'
        })
		 .when('/payment',
        {
            templateUrl: 'views/users/payment/payment.html'
        })
        .when('/products',
        {
            templateUrl: 'views/shop/products/allProducts/products.html'
        })
        .when('/products/:id',
        {
            templateUrl: 'views/shop/products/product/product.html'
        })
        .when('/categories',
        {
            templateUrl: 'views/shop/products/categories/productCategories.html'
        })
        .when('/events',
        {
            templateUrl: 'views/event/events/allEvents/events.html'
        })
        .when('/events/:id',
        {
            templateUrl: 'views/event/events/event/event.html'
        })
          .when('/rooms',
        {
            templateUrl: 'views/event/rooms/allrooms/rooms.html'
        })
           .when('/createroom',
        {
            templateUrl: 'views/event/rooms/createroom/createRoom.html'
        })
            .when('/accessories',
        {
            templateUrl: 'views/event/rooms/Accessories/accessories.html'
        })
            .when('/createAccessories',
        {
            templateUrl: 'views/event/rooms/Accessories/CreateAccessories/CreateAccessories.html'
        })
        .when('/activities',
        {
            templateUrl: 'views/event/activity/activities.html'
        })
        .when('/activitycategories',
        {
            templateUrl: 'views/event/activityCategory/activitycategory.html'
        })
        .when('/cart',
        {
            templateUrl: 'views/shop/cart/listProductsCart.html'
        })
		.when('/createEvent',
        {
            templateUrl: 'views/event/events/createEvent/createEvent.html'
        })
        .when('/notifications',
        {
            templateUrl : 'views/users/notifications/notifications.html'
        })
        .when('/manageProducts',
        {
            templateUrl : 'views/shop/products/manageProducts/manageProducts.html'
        })
        .when('/manageProducts/:id',
        {
            templateUrl : 'views/shop/products/manageProducts/manageproduct/manageProduct.html'
        })
        .when('/brands',
        {
            templateUrl: 'views/shop/products/brands/productBrand.html'
        })
        .when('/manageActivities',
        {
            templateUrl : 'views/event/activity/activities.html'
        })
		.when('/createActivity',
        {
            templateUrl : 'views/event/activity/createActivity/createActivity.html'
        })
        .when('/manageActivity/:id',
        {
            templateUrl : 'views/event/activity/manageOneActivity/manageOneActivity.html'
        })
        .otherwise({redirectTo: '/'});
	})
    .directive('navBar', function() {
        return {
            restrict : 'E',
            templateUrl: 'views/common/navbar/navbar.html'
        };
    })
    .directive('login', function() {
        return {
            restrict : 'E',
            templateUrl: 'views/users/login/login.html'
        };
    });
