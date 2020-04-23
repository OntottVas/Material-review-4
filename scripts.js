let name = 'OntottVas';

console.log(name + "'s apples");
console.log('Hello World!');

// $('selector').action();
$('h1').text('We are having a 10 minute break until 17:05');
$('p').html('StayAtHome Coding Camp, Likes: <strong>13</strong>');

$('strong').css('background', 'lime');
$('strong').css('padding', '10px');

let color = 'blue';

$('h2').toggleClass(color);
$('h2').toggleClass(color);

$('ul').append('<li>My name is ' + name + '</li>');
$('ul').append('<li id="specialListItem">Removable</li>');

$('#specialListItem').remove();

let addButtonHandler = () => {
    if ($('li').length < 5) {
    $('ul').append('<li class="removable">My name is ' + name + '</li>');
}
};

$('#addButton').click(addButtonHandler);

$('#removeButton').click(() => {
    // $('.removable').remove();
    if ($('li').length > 1) {
    $('li:last-child').remove();
}
});


let age = 26;

console.log('Starting the IF here');

if (age < 18) {
    console.log('Not old enough to drink.');
} else {
    console.log('Bottoms UP!');
}

console.log('This is the after the IF');


// This is a JavaScript comment.

/*
    This is a
    multiline
    JavaScript
    comment.
*/