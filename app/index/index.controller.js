import angular from 'angular';
import ngRedux from 'ng-redux';
import thunk from 'redux-thunk';

import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';
import asyncAction from '../actions/asyncAction';
import config from '../app.config';

module.exports = angular.module('app.index.index', [config, ngRedux])
  .config(ngReduxf)
  .service('AsyncActions', asyncAction)
  .controller('IndexController', IndexController)
  .name;
/* @ngInject */
function IndexController($scope, $sce) {
  $scope.nav.navText = $sce.trustAsHtml('首页');
}

/* @ngInject */
function ngReduxf($ngReduxProvider) {
  $ngReduxProvider.createStoreWith(rootReducer, [thunk, createLogger()]);
}

