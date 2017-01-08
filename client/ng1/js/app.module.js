import * as angular from 'angular';
import ngRedux from 'ng-redux';
import reducer from './reducers';
import counter from './counter.component';

angular.module('appCounter', [ngRedux])
    .config(configNgReduxProvider)
    .component(counter.name, counter());

configNgReduxProvider.$inject = ['$ngReduxProvider'];

function configNgReduxProvider($ngReduxProvider) {
    $ngReduxProvider.createStoreWith(reducer);
}
