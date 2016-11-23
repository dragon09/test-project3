angular.module('adoptionBlog')
    .controller('RegisterCtrl', function ($scope, $http) {
        $scope.messages = [
            'Please complete form',
            'You are registered!'
        ];
        $scope.message = $scope.messages[0];

        $scope.createAccount = function(name, email, password) {
            $http({
                url: 'http://localhost:9292/api/account/',
                method: 'POST',
                params: {
                    name: name,
                    email: email,
                    password: password }
            }).success(function (results) {
                $scope.message = $scope.message[1];
            }).error(function (err) {
                console.log('Did not work.');
                console.log(err);
            });
        };
    });
