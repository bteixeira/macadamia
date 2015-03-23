$(function () {

    var canvas = $('#stage')[0];

    var ctx = window.ctx = canvas.getContext('2d');

    var x = 0;
    var dir = true;

    var mainloop = function() {

        var W = 290;
        var H = 140;

        var l = 3;

        ctx.clearRect(dir? x - 1 : x + 1, 1, l, l);
        ctx.fillRect(x, 1, l, l);
        if (dir) {
        x += 1;
        if (x === W - l) {
            dir = false;
        }
        } else {
            x -= 1;
            if (x === 0) {
                dir = true;
            }
        }
    };

    var animFrame = window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||
        null ;

    var recursiveAnim = function() {
        mainloop();
        animFrame( recursiveAnim );
    };

    // start the mainloop
    animFrame( recursiveAnim );

});
