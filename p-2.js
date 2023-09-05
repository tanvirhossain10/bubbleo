document.getElementById('btn').addEventListener('click', function () {
    const none = document.getElementById('secret');
    none.style.display = 'none';

})
document.getElementById('input').addEventListener('focus', function () {
    document.body.style.backgroundColor = 'red';
})
// document.getElementById('input').addEventListener('blur', function () {
//     document.body.style.backgroundColor = 'white';
// })
document.getElementById('input').addEventListener('blur', function () {
    document.body.style.backgroundColor = 'orange';


})



document.getElementById('input').addEventListener('keyup', function () {
    const delBtn = document.getElementById('btn');
    if (input.value == 'delete') {
        delBtn.removeAttribute('disabled')
    }
    else {
        delBtn.setAttribute('disabled', true)
    }
})

 //same kaj by event
/* document.getElementById('input').addEventListener('keyup', function (event) {
    const delBtn = document.getElementById('btn');
    if (event.target.value == 'delete') {
        delBtn.removeAttribute('disabled')
    }
    else {
        delBtn.setAttribute('disabled', true)
    }
}) */