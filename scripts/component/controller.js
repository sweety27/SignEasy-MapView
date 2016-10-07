angular.module("mapApp")
    .controller('mapController', ['mapFactory', '$state', '$stateParams','$scope','NgMap', function(mapFactory, $state,
        $stateParams, $scope, NgMap) {
        var mapVar = this;
      var init = function() {
        $scope.isKeyUp = false;
        mapVar.lat = $stateParams.data.lat;
        mapVar.lng = $stateParams.data.lng;
        mapVar.cityList = ["Bangalore", "Chennai"];
        mapVar.myModel = [];
        if(mapVar.lat === 20.5937 && mapVar.lng === 78.9629){
          $scope.itemList = [
            {
              lat:12.9716,
              lng:77.5946,
              name:"Bangalore"
            },{
              lat:28.7041,
              lng:77.1025,
              name:"Delhi"
            }
          ]
        }

        if(mapVar.lat === 41.8719 && mapVar.lng === 12.5674){
          $scope.itemList = [
            {
              lat:41.9028,
              lng:12.4964,
              name:"Rome"
            },{
              lat:45.4654,
              lng:9.1859,
              name:"Milan"
            }
          ]
        }

        if(mapVar.lat === 51.1657 && mapVar.lng === 10.4515){
         $scope.itemList = [
            {
              lat:48.1351,
              lng:11.5820,
              name:"Munich"
            }
          ]
        }
      }

      mapVar.getMapView = function(lat, lng){
        mapVar.lat = lat;
        mapVar.lng = lng;
        mapVar.latlng = [mapVar.lat, mapVar.lng];
        mapVar.latlng = mapVar.latlng.toString();
      }

      init();
    }])

angular.module("mapApp")
      .directive('dropDown', function() {
      return {
          restrict: 'E',
          scope: { items: '=', ngModel: '='},
          template: '<input type="text" class="custom-form-control form-control"/>',
          replace: true,
          link: function(scope, elem, attrs) {
            elem.bind('keyup', function() {
            }); 
          }
        }
});

