import * as angular from 'angular';
import counter from './counter.component';

angular.module('appCounter', [])
    .component(counter.name, counter());
