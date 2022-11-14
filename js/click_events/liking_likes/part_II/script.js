alert("Click the links for a laugh :)");

function counter(element) {
    var h3 = document.querySelector(element);
    var x = parseInt(h3.innerHTML);
    h3.innerHTML = (x+1) + " like(s)";
}
