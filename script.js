'use strict'

let imgDisplay1El = document.getElementById('imgDisplay1');

let imgDisplay2El = document.getElementById('imgDisplay2');

let imgDisplay3El = document.getElementById('imgDisplay3');

// Global veriable

let previous, next

let IndexArr = [0, 1, 2];

// default action

showImage(0);

setInterval(changeImage, 5000);

// function area

function changeImage() {
    showImage(next);
}

function showImage(a) {
    IndexArr = [0, 1, 2];
    switch (a) {
        case 0:
            caseShowFn(0);
            break;
        case 1:
            caseShowFn(1);
            break;
        case 2:
            caseShowFn(2);
            break;
    }
}

function caseShowFn(a) {

    IndexArr.splice(a, 1);
    previous = a - 1;
    next = a + 1;

    if (a === 0) {
        previous = 2;
    }
    if (a === 2) {
        next = 0;
    }

    if (a === 0) {
        imgDisplay1El.style.display = 'block';
    }else if (a === 1) {
        imgDisplay2El.style.display = 'block';
    } else if (a === 2) {
        imgDisplay3El.style.display = "block";
    }
            
    IndexArr.forEach(a => {
        if (a === 0) {
            imgDisplay1El.style.display = 'none';
        }else if (a === 1) {
            imgDisplay2El.style.display = 'none';
        } else if (a === 2) {
            imgDisplay3El.style.display = "none";
        }
    })
}