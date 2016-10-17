(function () {
  'use strict';

  var app = angular.module('RedditCloneApp')
    .controller('DateController', DateController);

  function DateController ($rootScope) {
    $rootScope.date = new Date();
  }
})();
