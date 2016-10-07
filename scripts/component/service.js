angular.module('mapApp')
    .factory('mapFactory', mapFactory);

function mapFactory($http) {
    var that = this;
     return {
        async: function() {
          return $http.get('scripts/component/latlong.json');
        }
    };
}