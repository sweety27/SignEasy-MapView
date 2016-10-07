angular.module("mapApp")
    .controller('listController', ['mapFactory', '$state', function(mapFactory, $state) {
        var listVar = this;
        var init = function() {
            mapFactory.async().then(function(res){
	          listVar.response = res.data;
	          console.log(listVar.response);
	        });
        }
        listVar.goToCreate = function(attr){
        	$state.go('listAdd',{data:attr});
      	}
        init();
    }]);