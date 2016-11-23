angular.module('adoptionBlog')
    .controller('RegisterCtrl', function ($scope, $http) {
        $scope.messages = [
            'Please complete form',
            'You are registered!'
        ];
        $scope.message = $scope.messages[0];

        $scope.createAccount = function(name, email, password){
          $http({
            url: 'http://localhost:9292/api/accounts',
            method: 'POST',
            params: { name: name, email: email, password: password }
          }).success(function(results) {
            console.log(results)
            $scope.message = $scope.messages[1];
          }).error(function(err) {
            console.log('Ajax request 2 goes down');
            console.log(err);
          });
        };
    });
