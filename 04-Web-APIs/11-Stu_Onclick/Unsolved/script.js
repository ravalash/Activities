var num = 0;


document.getElementById('increment').addEventListener('click', incrementNum = function () {
    num++;
    document.body.firstElementChild.firstElementChild.textContent = 'Current Count: ' + num;
});

document.getElementById('decrement').addEventListener('click', decrementNum = function () {
    num--;
    document.body.firstElementChild.firstElementChild.textContent = 'Current Count: ' + num;
});
