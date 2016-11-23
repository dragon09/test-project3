angular.module('adoptionBlog')
    .controller('AdminCtrl', function ($scope, $http) {
        $scope.messages = [
            'Please complete form field',
            'Thank you for your for registering.'
        ];
        $scope.message = $scope.messages[0];

        $scope.createAccount = function(name, email, password) {
            $http({
                url: 'http://localhost:9292/api/account',
                method: 'POST',
                params: {name: name, email: email, password: password}
            }).success(function (results) {
                $scope.message = scope.message[1];
            }).error(function (err) {
                console.log('ajax use go down again');
                console.log(err);
            });
        };

    });
