var semaPresenter = angular.module('SourceCodePresenter', ['ui.router']);

/**
 * Config phase
 */
semaPresenter.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
          url: '/home',
          templateUrl: './index.html'
      })    
      .state('sema-chat', {
          url : '/example/:number',
          template : function() {

          }
      });

    // Default URL
    $urlRouterProvider.otherwise('/home');
  })

});

/**
 * Main controller
 */
semaPresenter.controller('mainController', ['$q', function($q) {
	$scope.currentExample = 1;
}]);

/**
 * Directive to show each example
 */
semaPresenter.directive('semaExample', function() {
	  return {
	    restrict : 'E',
	    scope : {},
	    template : function() { /* Sacar la referencia del currentExample y cargarlo si cambia */ },
	    replace : true,
	    controller : function($scope) { },
	    link : function(scope, element, attrs, controller) { }
	  };
	}
);