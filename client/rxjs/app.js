import $ from 'jquery';
const Rx = require('@reactivex/rxjs');

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

$(document).ready(() => {
    const $counter = $('#counter');
    const upClicks = Rx.Observable.fromEvent($('#incrementBtn'), 'click');
    const downClicks = Rx.Observable.fromEvent($('#decrementBtn'), 'click');
    const ups = upClicks.mapTo(INCREMENT);
    const downs = downClicks.mapTo(DECREMENT);
    const upsAndDowns = Rx.Observable.merge(ups, downs);
    const values = upsAndDowns.scan((acc, curr) => acc + (curr === INCREMENT ? 1 : -1), 0).startWith(0);
    const subscription = values.subscribe(v => $counter.html(v));
});
