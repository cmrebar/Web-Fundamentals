function likes (element) {
    var x = document.querySelector(element);
    var likes = parseInt(x.innerHTML);
    likes += 1;
    x.innerHTML = likes + ' petting(s)';
}

function goodbye (element) {
    var x = document.querySelector(element);
    x.remove();
}

function choice (element) {
    var x = document.querySelector(element);
    if (x.value == 'any') {
        
    }
    else {
        alert("You are looking for a: " + x.value);
    }
}