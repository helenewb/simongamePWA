//initialise variables
var gameBtns = document.querySelectorAll('.gamebtn');
var startBtn = document.querySelector('#startbtn');

//Event listener for all colored buttons
gameBtns.forEach(function (btn) {
    btn.addEventListener('click', () => {
        console.log(btn.id + ' läuft');
        animation(btn);
    });
});

//Event listener for Start button
startBtn.addEventListener('click', () => {
    console.log(startBtn.id + ' läuft');
});

//ANIMATION OF BUTTONS
function animation(item) {
    item.classList.add('brighten');
    setTimeout(function () {
        item.classList.remove('brighten');
    }, 250);
}
