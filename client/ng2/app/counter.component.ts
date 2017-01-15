import { Component, Inject } from "@angular/core";
import { NgRedux, select } from "ng2-redux";
import { Observable } from "rxjs/Observable";
import * as actions from "./actions";

@Component({
    selector: "counter",
    template: `
        <div>
            <button (click)="onIncrement()">Up</button>
            <button (click)="onDecrement()">Down</button>
            <span>{{ counter$ | async }}</span>
        </div>`
})
export class CounterComponent {
    @select() counter$: Observable<number>;
    constructor(private ngRedux: NgRedux<number>) {
    }
    onIncrement() {
        this.ngRedux.dispatch(actions.increment());
    }
    onDecrement() {
        this.ngRedux.dispatch(actions.decrement());
    }
}
