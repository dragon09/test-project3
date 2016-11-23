angular.module('adoptionBlog')
    .controller('LoginCtrl', function ($scope, $http) {
        $scope.messages = [
            'Please enter your first name and password',
            'You are logged in.'
        ];
        $scope.message = $scope.messages[0];
        
        $scope.loginAccount = function(email, password) {

          $http({
            url: 'http://localhost:9292/api/sessions/login',
            method: "POST",
            params: { email: email, password: password }
          }).success(function(result) {
            console.log(result)
          }).error(function(err) {
            console.log('Ajax request 3 goes down');
            console.log(err);
          }).then(function() {
            $scope.email = '';
            $scope.password = '';
          });
        }
    });
