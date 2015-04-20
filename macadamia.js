$(function () {

    var canvas = $('#stage')[0];
    var $container = $('.stage-container').eq(0);

    var ctx = window.ctx = canvas.getContext('2d');

    /**
     * RESOLUTIONS:
     *
     * 320 x 240     4: 3    1440 phones
     * 400 x 240     5: 3    199
     * 480 x 320     3: 2    384
     * 800 x 480     5: 3    669
     * 960 x 540    16: 9    284
     * 1280x 720    16: 9    469
     * 1920x1080    16: 9    176
     * 2560x1440    16: 9    31
     * higher       2
     */

//    ctx.save();
    var W = 1200;
    var H;
    function onResize() {
        canvas.width = $container.innerWidth();
        canvas.height = $container.innerHeight();
        ctx.resetTransform();
        var r = canvas.width / W;
        ctx.scale(r, r);
//        W = canvas.width;
        H = canvas.height / r;
    }

    onResize();
    $(window).on('resize', onResize);

    var x = 0;
    var dir = true;

    var mainloop = function () {

        var L = W / 10;
        var inc = 3;

        ctx.clearRect(0, 0, W, H);

        var gray;
        for (var w = 0 ; w < W ; w += L) {
            if ((w / L) % 2 === 0) {
                gray = true;
            } else {
                gray = false;
            }
            for (var h = 0 ; h < H ; h += L) {
                if (gray) {
                    ctx.fillStyle = 'gray';
                } else {
                    ctx.fillStyle = 'white';
                }
                ctx.fillRect(w, h, L, L);
                gray = !gray;
            }
        }

        ctx.fillStyle = 'black';
        ctx.fillRect(x, 0, L, L);
        if (dir) {
            x += inc;
            if (x >= W - L) {
                dir = false;
            }
        } else {
            x -= inc;
            if (x <= 0) {
                dir = true;
            }
        }
    };

    var animFrame = window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        null;

    var recursiveAnim = function () {
        mainloop();
        animFrame(recursiveAnim);
    };

    // start the mainloop
    animFrame(recursiveAnim);

});
