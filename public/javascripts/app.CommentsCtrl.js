angular.module('adoptionBlog')
    .controller('CommentsCtrl', function ($scope, $http) {
        $scope.messages = [

            'Thank you for your post. Go to the blog.'
        ];
        $scope.message = $scope.messages[0];

        $scope.createComment = function(content, user_id, post_id, image_id) {
            $http({
                url: 'http://localhost:9292/api/comment',
                method: 'POST',
                params: {
                    content: content,
                    user_id: user_id,
                    image_id: image_id}
            }).success(function (results) {
                $scope.message = $scope.message[1];
            }).error(function (err) {
                console.log('ajax use go down');
                console.log(err);
            });
        };

    });
