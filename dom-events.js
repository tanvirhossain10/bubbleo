// function makeRed() {
//     document.body.style.backgroundColor = 'orange';
// }
function makeRed(b) {
    // document.style.display = 'none'
    b.style.display = 'none'

    // document.onclick.display = 'none';
    // style.display = 'none';
}
// hadle blue button click by setting funtion name
const blueButton = document.getElementById('make-blue-button');
// console.log(blueButton);
blueButton.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}


// handle event using annoymous function
const grennButton = document.getElementById('make-green-button');
grennButton.onclick = function () {
    document.body.style.backgroundColor = 'green'
}

//handle by using add eventlisenter
const goldenButton = document.getElementById('make-golden-road');
goldenButton.addEventListener('click', makeGoldenRoad);

function makeGoldenRoad() {
    document.body.style.backgroundColor = 'goldenrod'
    // console.log(goldenButton)
}

//add eventlistener
const hotPink = document.getElementById('makePink');
hotPink.addEventListener('click', function makepink() {
    document.body.style.backgroundColor = 'hotpink';
})
document.getElementById('light-blue').addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightblue'
})
