import { Component, Inject } from "@angular/core";
import * as actions from "./actions";
import { Store } from "redux";
import { StoreToken } from "./storeToken";

@Component({
    selector: "counter",
    template: `
        <div>
            <button (click)="onIncrement()">Up</button>
            <button (click)="onDecrement()">Down</button>
            <span>{{ counter }}</span>
        </div>`
})
export class CounterComponent {
    private counter: number;
    constructor(@Inject(StoreToken) private store: Store<number>) {
        store.subscribe(() => this.readState());
        this.readState();
    }
    onIncrement() {
        this.store.dispatch(actions.increment());
    }
    onDecrement() {
        this.store.dispatch(actions.decrement());
    }
    private readState() {
        this.counter = this.store.getState();
    }
}
