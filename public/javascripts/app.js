console.log('lol');


angular.module('adoptionBlog', [ 'ngRoute'
]).config([
  '$locationProvider',
  '$routeProvider',
  function($locationProvider, $routeProvider) {

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false // good for anything IE9+
    })

    $routeProvider
      .when('/', {
        templateUrl: 'ngViews/home.html',
        controller: 'PostsCtrl'
      })
      .when('/register', {
        templateUrl: 'ngViews/register.html',
        controller: 'LoginCtrl'
      })
      .when('/login', {
        templateUrl: 'ngViews/login.html',
        controller: 'LoginCtrl'
      })
      .when('/create', {
        templateUrl: 'ngViews/create.html',
        controller: 'AdminCreateCtrl'
      })
      .when('/comments', {
        templateUrl: 'ngViews/comments.html',
        controller: 'CommentsCtrl'
      })
      .when('/admin', {
        templateUrl: 'ngViews/admin.html',
        controller: 'AdminDeleteCtrl'
      })
      .when('/account', {
        templateUrl: 'ngViews/account.html',
        controller: 'AccountCreateCtrl'
      })
      .when('/logout', {
        templateUrl: 'ngviews/logout.html',
        controller: 'LogoutCtrl'
      });

// image upload stuff-NOT WORKING
      function readURL(input) {
       if (input.files && input.files[0]) {
           var reader = new FileReader();

           reader.onload = function (e) {
               $("#image").val(e.target.result)

              console.log($('#image').val())
           };

           reader.readAsDataURL(input.files[0]);
       }
   }


    $routeProvider.otherwise({ redirectTo: '/' });
  }
]);
