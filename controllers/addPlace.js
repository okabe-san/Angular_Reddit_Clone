(function () {
  'use strict';

  var app = angular.module('RedditCloneApp')
    .controller('addPlaceController', addPlaceController);

  function addPlaceController ($rootScope) {
    // console.log($rootScope);
    $rootScope.brewingArr = [];
    this.add = (info) => {
      $rootScope.brewingArr.push({
        title: info.title,
        author: info.author,
        image: info.url,
        description: info.description,
        rating: 0
      });
    };

    this.addComment = (place, comment) => {
      // console.log(place, comment);
      place.reviews.push({
        name: comment.name,
        comment: comment.comment
      });
    };
  }

})()
