// Create your HTML Page via DOM Methods here!

// var header1 = document.createElement('h1');
// var header2 = document.createElement('h2');
// var img1 = document.createElement('img');


// header1.textContent = "Is this Working???";
// header2.textContent = "Hey it is!!!";

document.body.appendChild(document.createElement('h1'));
document.body.lastElementChild.textContent = "Is this Working???";
document.body.appendChild(document.createElement('h2'));
document.body.lastElementChild.textContent = "Hey it Is!!!";
document.body.appendChild(document.createElement('figure'));
document.body.appendChild(document.createElement('img'));




document.body.lastElementChild.lastElementChild.textContent = "Dog on a skateboard";

document.querySelector('h1').setAttribute('style', 'text-align:center');
document.querySelector('h2').setAttribute('style', 'text-align:center');

document.querySelector('img').setAttribute('src', 'https://placeimg.com/640/480/any');




