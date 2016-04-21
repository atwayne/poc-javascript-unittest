(function() {
  'use strict';

  angular.module('app')
    .controller('CaculateController', ['CaculateService', function(CaculateService) {
      var vm = this;
      vm.clear = function() {
        vm.first = 0;
        vm.second = 0;
        vm.result = 0;
      };

      vm.init = function() {
        vm.first = 1;
        vm.second = 2;
      };

      vm.add = function() {
        vm.result = CaculateService.Add(vm.first, vm.second);
      };
    }]);
}());
