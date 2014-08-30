'use strict';


angular.module('myApp.controllers', [])
    .controller('MainCtrl', ['$scope', '$window', 'APP_TITLE',
        function($scope, $window, APP_TITLE) {
            $window.document.title = APP_TITLE;
        }
    ]);
