import $ from 'jquery';

let counter = 0;
let $counter;

$(document).ready(() => {
    $counter = $('#counter');
    $('#incrementBtn').click(() => onIncrement());
    $('#decrementBtn').click(() => onDecrement());
    updateCounter();
});

function onIncrement() {
    counter += 1;
    updateCounter();
}

function onDecrement() {
    counter -= 1;
    updateCounter();
}

function updateCounter() {
    $counter.html(counter);
}
