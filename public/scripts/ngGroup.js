var myApp = angular.module('myApp', []);

myApp.controller('GroupController', function($http){
  console.log('angular working');

  var vm = this;

  function getItems() {
    $http({
      method: 'GET',
      url: '/getItems'
    }).then(function(response){
      console.log('response:', response.data);
      vm.groupItems = '';
      vm.groupItems = response.data;
    });  // end $http
  }
  getItems();

  vm.addItem = function(){
    console.log('in addItem ng-click', vm.nameIn, vm.descriptionIn);

    var item = {
      name: vm.nameIn,
      description: vm.descriptionIn
    };
    console.log(item);

    vm.nameIn = '';
    vm.descriptionIn = '';

    $http({
      method: 'POST',
      url: '/addItem',
      data: item
    }).then ( function (response) {
      console.log('response', response.data);
      vm.groupItems = '';
      vm.groupItems = response.data;
    });

    getItems();

  }; //end addItem function
}); //end controller function
