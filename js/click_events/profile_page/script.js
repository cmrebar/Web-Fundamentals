function change (element) {
    var profile = document.querySelector(element);
    profile.innerHTML = '';
    profile.innerHTML = 'Sarah Connor';
}

function eliminate (v,w,x,y,z) { 
    var goodbye = [w,x,y,z];
    for(loop=0;loop<goodbye.length;loop++) {
        var destroy = document.querySelector(goodbye[loop]);
        destroy.remove();
    };
    var kibble = document.querySelector(v);
    var oldRequest = parseInt(kibble.innerHTML);
    console.log(oldRequest);
    oldRequest -= 1;
    var newRequest = document.querySelector(v);
    newRequest.innerHTML = oldRequest;
}