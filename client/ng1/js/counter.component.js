import * as angular from 'angular';
import * as actions from './actions';
import reducer from './reducers';
import { createStore, Store } from 'redux';

export default function counter() {
    return {
        template: `
            <button ng-click="$ctrl.onIncrement()">Up</button>
            <button ng-click="$ctrl.onDecrement()">Down</button>
            <span>{{ $ctrl.counter }}</span>`,
        controller: CounterController
    };
}

CounterController.$inject = ['$scope'];

function CounterController($scope) {

    const vm = this;
    vm.counter = undefined;
    vm.onIncrement = onIncrement;
    vm.onDecrement = onDecrement;

    const store = createStore(reducer);
    $scope.$on('$destroy', store.subscribe(readState.bind(vm)));
    readState();

    function onIncrement() {
        store.dispatch(actions.increment());
    }

    function onDecrement() {
        store.dispatch(actions.decrement());
    }

    function readState() {
        vm.counter = store.getState();
    }
}
