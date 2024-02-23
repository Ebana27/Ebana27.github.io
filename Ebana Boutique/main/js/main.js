
function colorBg0() {
    var navLink = document.querySelectorAll('.__link_Nav');
    navLink[0].classList.add('activate');
    navLink[1].classList.remove('activate');
    navLink[2].classList.remove('activate');
    navLink[3].classList.remove('activate');
}

function colorBg1() {
    var navLink = document.querySelectorAll('.__link_Nav');
    navLink[1].classList.add('activate');
    navLink[0].classList.remove('activate');
    navLink[2].classList.remove('activate');
    navLink[3].classList.remove('activate');
}

function colorBg2() {
    var navLink = document.querySelectorAll('.__link_Nav');
    navLink[2].classList.add('activate');
    navLink[0].classList.remove('activate');
    navLink[1].classList.remove('activate');
    navLink[3].classList.remove('activate');
}

function colorBg3() {
    var navLink = document.querySelectorAll('.__link_Nav');
    navLink[3].classList.add('activate');
    navLink[0].classList.remove('activate');
    navLink[2].classList.remove('activate');
    navLink[1].classList.remove('activate');
}

function section() {
    var ser = document.getElementById('ser');
    ser.style.color = "black";
}

function shadowBox() {
    const contentBox = document.querySelectorAll('.content-box');
    contentBox[0].addEventListener('click', () => {
        contentBox[0].classList.add('content-box-plus');
        contentBox[1].classList.add('content-box');
        contentBox[2].classList.add('content-box');
        contentBox[3].classList.add('content-box');
        contentBox[4].classList.add('content-box');
        contentBox[5].classList.add('content-box');
    });

    contentBox[1].addEventListener('click', () => {
        contentBox[1].classList.add('content-box-plus');
        contentBox[0].classList.add('content-box');
        contentBox[2].classList.add('content-box');
        contentBox[3].classList.add('content-box');
        contentBox[4].classList.add('content-box');
        contentBox[5].classList.add('content-box');
    });

    contentBox[2].addEventListener('click', () => {
        contentBox[2].classList.add('content-box-plus');
        contentBox[0].classList.add('content-box');
        contentBox[1].classList.add('content-box');
        contentBox[3].classList.add('content-box');
        contentBox[4].classList.add('content-box');
        contentBox[5].classList.add('content-box');
    });

    contentBox[3].addEventListener('click', () => {
        contentBox[3].classList.add('content-box-plus');
        contentBox[0].classList.add('content-box');
        contentBox[2].classList.add('content-box');
        contentBox[1].classList.add('content-box');
        contentBox[4].classList.add('content-box');
        contentBox[5].classList.add('content-box');
    });

    contentBox[4].addEventListener('click', () => {
        contentBox[4].classList.add('content-box-plus');
        contentBox[0].classList.add('content-box');
        contentBox[2].classList.add('content-box');
        contentBox[3].classList.add('content-box');
        contentBox[1].classList.add('content-box');
        contentBox[5].classList.add('content-box');
    });

    contentBox[5].addEventListener('click', () => {
        contentBox[5].classList.add('content-box-plus');
        contentBox[0].classList.add('content-box');
        contentBox[2].classList.add('content-box');
        contentBox[3].classList.add('content-box');
        contentBox[4].classList.add('content-box');
        contentBox[1].classList.add('content-box');
    });
}

shadowBox()
