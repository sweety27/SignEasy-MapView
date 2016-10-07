angular.module('app', ['mapApp', 'ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/list');
        $stateProvider
            .state('list', { url: '/list', templateUrl: 'templates/list.html', controller: 'listController as listVar'})
            .state('listAdd', { url: '/list/add', templateUrl: 'templates/create.html', controller: 'mapController as mapVar', params: {data:null}
        })
    }]);