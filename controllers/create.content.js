(function () {
  'use strict';

  var app = angular.module('RedditCloneApp')
    .controller('CreateContentController', CreateContentController);

  function CreateContentController ($rootScope) {
    $rootScope.id = 1;

    $rootScope.brewingArr = [{
      id: $rootScope.id++,
      image: 'BaereBrewing.jpeg',
      title: 'Baere Brewing',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      author: 'Apple',
      rating: 5,
      date: '10-10-2016',
      reviews: [{
        id: $rootScope.id++,
        name: 'Pie',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }]
    }, {
      id: $rootScope.id++,
      image: 'TRVE.jpeg',
      title: 'TRVE Brewing Company',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      author: 'Darkest',
      rating: 4,
      date: '10-16-2016',
      reviews: [{
          id: $rootScope.id++,
          name: 'Syn',
          comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },  {
          id: $rootScope.id++,
          name: 'Angel',
          comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }]
      }]
    }
})()
