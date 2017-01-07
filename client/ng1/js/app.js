import * as angular from 'angular';
import * as actions from './actions';
import counter from './reducers';
import { createStore, Store } from 'redux';

const app = angular.module('appCounter', []);

app.component('counter', CounterComponent());

function CounterComponent() {
    return {
        template: `
            <button ng-click="$ctrl.onIncrement()">Up</button>
            <button ng-click="$ctrl.onDecrement()">Down</button>
            <span>{{ $ctrl.counter }}</span>`,
        controller: class {

            constructor($scope) {
                this.store = createStore(counter);
                const unsubscribe = this.store.subscribe(() => this.readState());
                this.readState();
                $scope.$on('$destroy', unsubscribe);
            }

            onIncrement() {
                this.store.dispatch(actions.increment());
            }

            onDecrement() {
                this.store.dispatch(actions.decrement());
            }

            readState() {
                this.counter = this.store.getState();
            }
        }
    };
}
