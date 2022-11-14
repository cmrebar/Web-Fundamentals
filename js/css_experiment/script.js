var x = 1
var y = document.querySelector(".switch");
setInterval(function () {
            if(x==1) {
                y.style.color = "green";
                x = 2;
            }
            else {
                y.style.color = "red";
                x = 1;
            };}, 500);
    

