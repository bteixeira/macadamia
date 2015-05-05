$(function () {

    var canvas = $('#stage')[0];
    var $container = $('.stage-container').eq(0);

    var ctx = window.ctx = canvas.getContext('2d');

    ctx.translate(0, -Math.sqrt(2)*100/4);
    ctx.scale(1, 0.5);
    ctx.rotate(Math.PI/4);

    ctx.fillRect(0, 0, 100, 100);
    ctx.clearRect(50, 50, 50, 50);

});
