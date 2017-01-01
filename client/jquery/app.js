import $ from 'jquery';

let counter = 0;
let $counter;

$(document).ready(() => {
    $counter = $('#counter');
    $('#incrementBtn').click(_ => onIncrement());
    $('#decrementBtn').click(_ => onDecrement());
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
