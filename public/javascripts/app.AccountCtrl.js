angular.module('adoptionBlog')
    .controller('AccountCtrl', function ($scope, $http) {
        $scope.messages = [
            'Please enter your first name and password',
            'You are logged in.'
        ];
        $scope.message = $scope.messages[0];

        $scope.loginAccount = function(name, email, password) {
            $http({
                url: 'http://localhost:9292/api/account/',
                method: 'get',
                params: {
                    name: name,
                    password: password }
            }).success(function (results) {
                $scope.message = $scope.message[1];
                console.log('logged in.')
            }).error(function (err) {
                console.log('failed to login.');
                console.log(err);
            });
        };
    });
