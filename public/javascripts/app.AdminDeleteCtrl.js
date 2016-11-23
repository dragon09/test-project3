/**
 * Created by codeforcoffee on 11/16/16.
 */
angular.module('adoptionBlog')
.controller('AdminDeleteCtrl', function($scope, $http) {

  $scope.url = 'http://localhost:9292/api/posts/';
  $scope.posts = [];

  $scope.fetch = function() {
    $http.get($scope.url).success(function(results) {
      $scope.posts = results;
    }).error(function(err) {
      console.log(err);
    });
  };

  $scope.removeBlogEntry = function(blog) {
    console.log(blog);
    var remove = confirm('Delete this post?');
    if (remove) {
      $http.delete($scope.url + blog.id).success(function(result) {
        $scope.fetch(); // auto-update my list
      }).error(function(err) {
        console.log(err);
      });
    }
  };

  $scope.fetch();

});
