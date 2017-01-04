import {Component} from '@angular/core';
import * as actions from './actions';
import counter from './reducers';
import { createStore, Store } from 'redux';

@Component({
    selector: 'app',
    template: `
        <div>
            <button (click)="onIncrement()">Up</button>
            <button (click)="onDecrement()">Down</button>
            <span>{{ counter }}</span>
        </div>`
})
export class AppComponent {
    private store: Store<number>;
    private counter: number;
    constructor() {
        this.store = createStore<number>(counter);
        this.store.subscribe(() => this.readState());
        this.readState();
    }
    onIncrement() {
        this.store.dispatch(actions.increment())
    }
    onDecrement() {
        this.store.dispatch(actions.decrement())
    }
    private readState() {
        this.counter = this.store.getState();
    }
}
