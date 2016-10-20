/**
 * Created by Liu.Jun on 2016/10/19.
 */
require('./canvas.scss');
require('commonjs/requestAnimationFrame.js');

var canvas = document.getElementById('j_canvas'),
    video = document.getElementById('j_video'),
    ctx = canvas.getContext('2d'),
    raf;

video.addEventListener('play',function () {
    console.log('play');
    function draw() {
        ctx.drawImage(video,0,0,canvas.width,canvas.height);
        raf = window.requestAnimationFrame(draw);
    }
    draw();
},false);

video.addEventListener('pause',function () {
    console.log('pause');
    window.cancelAnimationFrame(raf);
},false);

video.addEventListener('ended',function () {
    console.log('ended');
    window.cancelAnimationFrame(raf);

},false);


