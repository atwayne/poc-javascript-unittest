(function() {
  'use strict';
  angular.module('app')
    .factory('CaculateService', function() {
      var add = function(first, second) {
        first = parseFloat(first);
        second = parseFloat(second);
        if (isNaN(first) || isNaN(second)) {
          return first + second;
        }
        return first + second;
      };

      return {
        'Add': add
      };

    });
}());
