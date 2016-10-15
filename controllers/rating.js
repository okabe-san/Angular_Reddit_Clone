(function () {
  'use strict';

  var app = angular.module('RedditCloneApp')
    .controller('RatingController', RatingController);

  function RatingController ($rootScope) {
    this.pulus = (item) => {
      item.rating++;
    };
    this.minus = (item) => {
      item.rating--;
    }
  }
})()
