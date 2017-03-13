<template>
    <section class="Gio-98">
        <div class="back">
            <a v-link="{name:'index'}">返回首页</a>
        </div>
        <h2>Frame</h2>
        <div class="grid">
            <div class="box">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                    <line class="top" x1="0" y1="0" x2="900" y2="0"/>
                    <line class="left" x1="0" y1="460" x2="0" y2="-920"/>
                    <line class="bottom" x1="300" y1="460" x2="-600" y2="460"/>
                    <line class="right" x1="300" y1="0" x2="300" y2="1380"/>
                </svg>
                <h3>G</h3>
                <span>2014</span>
                <span></span>
            </div>
            <div class="box">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                    <line class="top" x1="0" y1="0" x2="900" y2="0"/>
                    <line class="left" x1="0" y1="460" x2="0" y2="-920"/>
                    <line class="bottom" x1="300" y1="460" x2="-600" y2="460"/>
                    <line class="right" x1="300" y1="0" x2="300" y2="1380"/>
                </svg>
                <h3>I</h3>
                <span>2014</span>
                <span></span>
            </div>
            <div class="box">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                    <line class="top" x1="0" y1="0" x2="900" y2="0"/>
                    <line class="left" x1="0" y1="460" x2="0" y2="-920"/>
                    <line class="bottom" x1="300" y1="460" x2="-600" y2="460"/>
                    <line class="right" x1="300" y1="0" x2="300" y2="1380"/>
                </svg>
                <h3>O</h3>
                <span>2014</span>
                <span></span>
            </div>
        </div>
    </section>
</template>

<style>
    .Gio-98 {
        background: #2c3e50;
        color: #ecf0f1;
        font-size: 100%;
        line-height: 1.25;
        font-family: 'Lato', Arial, sans-serif;
    }

    a {
        color: #ffffff;
        text-decoration: none;
        outline: none;
    }
</style>
<style lang="scss" rel="stylesheet/scss" scoped>
    .box {
        width: 300px;
        height: 460px;
        position: relative;
        background: rgba(255,255,255,1);
        display: inline-block;
        margin: 0 10px;
        cursor: pointer;
        color: #2c3e50;
        box-shadow: inset 0 0 0 3px #2c3e50;
        -webkit-transition: background 0.4s 0.5s;
        transition: background 0.4s 0.5s;
    }

    .box:hover {
        background: rgba(255,255,255,0);
        -webkit-transition-delay: 0s;
        transition-delay: 0s;
    }

    .box h3 {
        font-family: "Ruthie", cursive;
        font-size: 180px;
        line-height: 370px;
        margin: 0;
        font-weight: 400;
        width: 100%;
    }

    .box span {
        display: block;
        font-weight: 400;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-size: 13px;
        padding: 5px;
    }

    .box h3,
    .box span {
        -webkit-transition: color 0.4s 0.5s;
        transition: color 0.4s 0.5s;
    }

    .box:hover h3,
    .box:hover span {
        color: #fff;
        -webkit-transition-delay: 0s;
        transition-delay: 0s;
    }

    .box svg {
        position: absolute;
        top: 0;
        left: 0;
    }

    .box svg line {
        stroke-width: 3;
        stroke: #ecf0f1;
        fill: none;
        -webkit-transition: all .8s ease-in-out;
        transition: all .8s ease-in-out;
    }

    .box:hover svg line {
        -webkit-transition-delay: 0.1s;
        transition-delay: 0.1s;
    }

    .box svg line.top,
    .box svg line.bottom {
        stroke-dasharray: 330 240;
    }

    .box svg line.left,
    .box svg line.right {
        stroke-dasharray: 490 400;
    }

    .box:hover svg line.top {
        -webkit-transform: translateX(-600px);
        transform: translateX(-600px);
    }

    .box:hover svg line.bottom {
        -webkit-transform: translateX(600px);
        transform: translateX(600px);
    }

    .box:hover svg line.left {
        -webkit-transform: translateY(920px);
        transform: translateY(920px);
    }

    .box:hover svg line.right {
        -webkit-transform: translateY(-920px);
        transform: translateY(-920px);
    }

    /* Alternatives */



    /* Frame */
    .Gio-98 .box {
        background: rgba(0,0,0,0);
        color: #fff;
        box-shadow: none;
        -webkit-transition: background 0.3s;
        transition: background 0.3s;
    }

    .Gio-98 .box:hover {
        background: rgba(0,0,0,0.4);
    }

    .Gio-98 .box h3,
    .Gio-98 .box span {
        -webkit-transition: none;
        transition: none;
    }

    .Gio-98 .box svg line {
        -webkit-transition: all .5s;
        transition: all .5s;
    }

    .Gio-98 .box:hover svg line {
        stroke-width: 10;
        -webkit-transition-delay: 0s;
        transition-delay: 0s;
    }

    .Gio-98 .box:hover svg line.top {
        -webkit-transform: translateX(-300px);
        transform: translateX(-300px);
    }

    .Gio-98 .box:hover svg line.bottom {
        -webkit-transform: translateX(300px);
        transform: translateX(300px);
    }

    .Gio-98 .box:hover svg line.left {
        -webkit-transform: translateY(460px);
        transform: translateY(460px);
    }

    .Gio-98 .box:hover svg line.right {
        -webkit-transform: translateY(-460px);
        transform: translateY(-460px);
    }

    /* COMPONENTS */

    /* CSS */
    @import url(http://fonts.googleapis.com/css?family=Lato:300,400,700|Ruthie);
    @font-face {
        font-weight: normal;
        font-style: normal;
        font-family: 'Gioicons';
        src:url('http://disantimonia.pixub.com/codepen/codropsicons/Gioicons.eot');
        src:url('http://disantimonia.pixub.com/codepen/codropsicons/Gioicons.eot?#iefix') format('embedded-opentype'),
        url('http://disantimonia.pixub.com/codepen/codropsicons/Gioicons.woff') format('woff'),
        url('http://disantimonia.pixub.com/codepen/codropsicons/Gioicons.ttf') format('truetype'),
        url('http://disantimonia.pixub.com/codepen/codropsicons/Gioicons.svg#Gioicons') format('svg');
    }

    *, *:after, *:before { -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; }
    .clearfix:before, .clearfix:after { content: ''; display: table; }
    .clearfix:after { clear: both; }

    a:hover, a:focus {
        color: #fff;
    }

    /* To Navigation Style */
    .Gio-top {
        width: 100%;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 0.69em;
        line-height: 2.2;
    }

    .Gio-top a {
        display: inline-block;
        padding: 0 1em;
        text-decoration: none;
        letter-spacing: 1px;
    }

    .Gio-top span.right {
        float: right;
    }

    .Gio-top span.right a {
        display: block;
        float: left;
    }

    .Gio-icon:before {
        margin: 0 4px;
        text-transform: none;
        font-weight: normal;
        font-style: normal;
        font-variant: normal;
        font-family: 'Gioicons';
        line-height: 1;
        speak: none;
        -webkit-font-smoothing: antialiased;
    }

    .Gio-icon-drop:before {
        content: "\e001";
    }

    .Gio-icon-prev:before {
        content: "\e004";
    }

    section {
        padding: 4em 2em;
        text-align: center;
    }

    section {
        h2 ,a{
            font-weight: 300;
            font-size: 2em;
            color: #ffffff;
            padding: 1em 0;
        }
    }

    .Gio-header + section {
        padding-top: 1.5em;
    }

    .related p {
        font-size: 1.5em;
    }

    .related > a {
        background: rgba(0,0,0,0.05);
        display: inline-block;
        text-align: center;
        margin: 20px 10px;
        padding: 25px;
        -webkit-transition: color 0.3s, background-color 0.3s;
        transition: color 0.3s, background-color 0.3s;
    }

    .related a img {
        max-width: 100%;
        opacity: 0.8;
        -webkit-transition: opacity 0.3s;
        transition: opacity 0.3s;
    }

    .related a:hover img,
    .related a:active img {
        opacity: 1;
    }

    .related a h3 {
        margin: 0;
        padding: 0.5em 0 0.3em;
        max-width: 300px;
        text-align: left;
    }

    @media screen and (max-width: 25em) {

        .Gio-icon span {
            display: none;
        }

    }
</style>
