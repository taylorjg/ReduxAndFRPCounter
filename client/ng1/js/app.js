import * as angular from 'angular';
import * as actions from './actions';
import counter from './reducers';
import { createStore, Store } from 'redux';

const app = angular.module('appCounter', []);

function CounterController() {

    const vm = this;
    vm.counter = undefined;
    vm.onIncrement = onIncrement;
    vm.onDecrement = onDecrement;

    const store = createStore(counter);
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

app.controller(CounterController.name, CounterController);
