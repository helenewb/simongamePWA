//initialise variables
var gameBtns = document.querySelectorAll('.gamebtn');
var startBtn = document.querySelector('#startbtn');
var btnarray = ['#yellow', '#red', '#green', '#blue'];
var testarray = [0, 1, 2, 3, 3, 0, 0];

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
    startAnimation();
});

//ANIMATION OF BUTTONS
function animation(item) {
    item.classList.add('brighten');
    setTimeout(function () {
        item.classList.remove('brighten');
    }, 250);
}

function startAnimation() {
    testarray.forEach(element => {
        clickedBtn(element);
        setTimeout(5000);
        
    });
}

function clickedBtn(i) {
    document.querySelector(btnarray[i]).click();
}