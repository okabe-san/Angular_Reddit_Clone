(function () {
  'use strict';

  var app = angular.module('RedditCloneApp')
    .controller('addPlaceController', addPlaceController);

  function addPlaceController ($rootScope) {
    $rootScope.brewingArr = [];
    this.add = (info) => {
      $rootScope.brewingArr.push({
        title: info.title
      });
    };
  }
})()
