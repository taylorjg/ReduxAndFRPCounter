import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgReduxModule, NgRedux } from "ng2-redux";
import { AppComponent } from "./app.component";
import { CounterComponent } from "./counter.component";
import { AppState, initialState } from "./appState";
import { rootReducer } from "./reducers";

@NgModule({
    imports: [BrowserModule, NgReduxModule],
    declarations: [AppComponent, CounterComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(ngRedux: NgRedux<AppState>) {
        ngRedux.configureStore(rootReducer, initialState);
    }
}
