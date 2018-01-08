import angular from 'angular';

import dropdownTpl from './dropdown.html';

module.exports = angular
  .module('app.index.dropdown', [])
  .directive('dropDownMenu', dropDownMenu)
  .name;

/* @ngInject */
function dropDownMenu($location) {
  return {
    restrict: 'E',
    controllerAs: 'dropdown',
    controller: AppController,
    template: dropdownTpl
  };
}

// es6语法类
class AppController {
/* @ngInject */
  constructor($scope, $ngRedux, AsyncActions) { // 默认构造函数
    const unsubscribe = $ngRedux.connect(this.mapStateToThis, AsyncActions)(this);
    $scope.$on('$destroy', unsubscribe);
  }
  // 把组件需要的值从redux里拿出来
  mapStateToThis(state) {
    const { showedReddit } = state;
    return {
      showedReddit
    };
  }
}
