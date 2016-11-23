angular.module('adoptionBlog')
    .controller('LogoutCtrl', function ($scope, $http) {
        $scope.messages = [
             'Thank you for checking us out.',
            'You are now logged out.'
        ];
        $scope.message = $scope.messages[0];

        $scope.logoutAccount = function(name, email, password) {
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
