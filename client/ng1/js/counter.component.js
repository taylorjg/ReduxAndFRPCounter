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

CounterController.$inject = [];

function CounterController() {

    const vm = this;
    vm.counter = undefined;
    vm.onIncrement = onIncrement;
    vm.onDecrement = onDecrement;

    const store = createStore(reducer);
    store.subscribe(() => readState());
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
