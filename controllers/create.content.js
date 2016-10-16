(function () {
  'use strict';

  var app = angular.module('RedditCloneApp')
    .controller('CreateContentController', CreateContentController);

  function CreateContentController ($rootScope) {
    $rootScope.id = 1;

    $rootScope.brewingArr = [{
      id: $rootScope.id++,
      image: 'http://lefthandrightbrainpod.com/wp-content/uploads/2015/03/IMG_1225.jpg',
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
      image: 'https://cdn0.vox-cdn.com/uploads/chorus_image/image/38702040/1255206_566416250061639_2064978461_n.0.jpg',
      title: 'TRVE Brewing Company',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      author: 'Darkest',
      rating: 2,
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
