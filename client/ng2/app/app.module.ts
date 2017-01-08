import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreToken } from './storeToken';
import reducer from './reducers';
import { createStore, Store } from 'redux';

const store = createStore<number>(reducer);

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [
        { provide: StoreToken, useValue: store }
    ]
})
export class AppModule {
}
