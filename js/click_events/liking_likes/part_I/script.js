var count = 3

function counter () {
    count++;
    var h3 = document.querySelector('.counter');
    h3.innerHTML = count + " like(s)";
}