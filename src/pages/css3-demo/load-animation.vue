<template>
    <div>
        <div class="back">
            <a v-link="{name:'index'}">返回首页</a>
        </div>
        <ul class="case">
            <li>
                <div class="spinner1">
                    <div class="rect1"></div>
                    <div class="rect2"></div>
                    <div class="rect3"></div>
                    <div class="rect4"></div>
                    <div class="rect5"></div>
                </div>
            </li>
            <li>
                <div class="spinner2"></div>
            </li>
            <li>
                <div class="spinner3">
                    <div class="double-bounce1"></div>
                    <div class="double-bounce2"></div>
                </div>
            </li>
            <li>
                <div class="spinner4">
                    <div class="cube1"></div>
                    <div class="cube2"></div>
                </div>
            </li>
            <li>
                <div class="spinner5">
                    <div class="dot1"></div>
                    <div class="dot2"></div>
                </div>
            </li>
            <li>
                <div class="spinner6">
                    <div class="bounce1"></div>
                    <div class="bounce2"></div>
                    <div class="bounce3"></div>
                </div>
            </li>
            <li>
                <div class="spinner7"></div>
            </li>

            <li>
                <div class="spinner8">
                    <div class="spinner-container container1">
                        <div class="circle1"></div>
                        <div class="circle2"></div>
                        <div class="circle3"></div>
                        <div class="circle4"></div>
                    </div>
                    <div class="spinner-container container2">
                        <div class="circle1"></div>
                        <div class="circle2"></div>
                        <div class="circle3"></div>
                        <div class="circle4"></div>
                    </div>
                    <div class="spinner-container container3">
                        <div class="circle1"></div>
                        <div class="circle2"></div>
                        <div class="circle3"></div>
                        <div class="circle4"></div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<style lang="scss" rel="stylesheet/scss" scoped>
    .case {
        margin: 20px 0;
        li{
            margin: 15px 0;
            padding: 10px 0;
            background-color: #CCCCCC;
        }
    }
    .spinner1 {
        margin: 0 auto;
        width: 50px;
        height: 60px;
        text-align: center;
        font-size: 10px;
        &> div {
            background-color: #67CF22;
            height: 100%;
            width: 6px;
            display: inline-block;
            animation: stretchdelay 1.2s infinite ease-in-out;
        }
        .rect2 {
            animation-delay: -1.1s;
        }
        .rect3 {
            animation-delay: -1.0s;
        }
        .rect4 {
            animation-delay: -0.9s;
        }
        .rect5 {
            animation-delay: -0.8s;
        }
        @keyframes stretchdelay {
            0%, 40%, 100% {
                transform: scaleY(0.4);
            }  20% {
                   transform: scaleY(1.0);
               }
        }
    }
    .spinner2 {
        width: 60px;
        height: 60px;
        background-color: #67CF22;
        margin: 0 auto;
        animation: rotateplane 1.2s infinite ease-in-out;
        @keyframes rotateplane {
            0% {
                transform: perspective(120px) rotateX(0deg) rotateY(0deg);
            } 50% {
                  transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
              } 100% {
                    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
                }
        }
    }
    .spinner3{
        width: 60px;
        height: 60px;
        position: relative;
        margin: 0 auto;
        .double-bounce1, .double-bounce2 {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background-color: #67CF22;
            opacity: 0.6;
            position: absolute;
            top: 0;
            left: 0;
            animation: bounce 2.0s infinite ease-in-out;
        }
        .double-bounce2 {
            animation-delay: -1.0s;
        }
        @keyframes bounce {
            0%, 100% {
                transform: scale(0.0);
            } 50% {
                  transform: scale(1.0);
              }
        }
    }
    .spinner4{
        margin: 0 auto;
        width: 32px;
        height: 70px;
        position: relative;
        .cube1, .cube2 {
            background-color: #67CF22;
            width: 30px;
            height: 30px;
            position: absolute;
            top: 0;
            left: 0;
            animation: cubemove 1.8s infinite ease-in-out;
        }

        .cube2 {
            animation-delay: -0.9s;
        }
        @keyframes cubemove {
            25% {
                transform: translateX(42px) rotate(-90deg) scale(0.5);
            } 50% {
                  transform: translateX(42px) translateY(42px) rotate(-179deg);
              } 50.1% {
                    transform: translateX(42px) translateY(42px) rotate(-180deg);
                } 75% {
                      transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
                  } 100% {
                        transform: rotate(-360deg);
                    }
        }
    }
    .spinner5{
        margin: 0 auto;
        width: 90px;
        height: 90px;
        position: relative;
        text-align: center;
        animation: rotate 2.0s infinite linear;
        .dot1, .dot2 {
            width: 60%;
            height: 60%;
            display: inline-block;
            position: absolute;
            top: 0;
            background-color: #67CF22;
            border-radius: 100%;
            animation: bounce 2.0s infinite ease-in-out;
        }
        .dot2 {
            top: auto;
            bottom: 0px;
            animation-delay: -1.0s;
        }

        @keyframes rotate { 100% { transform: rotate(360deg); }}
        @keyframes bounce {
            0%, 100% {
                transform: scale(0.0);
            } 50% {
                  transform: scale(1.0);
              }
        }
    }
    .spinner6{
        margin: 0 auto 0;
        width: 150px;
        text-align: center;

        .bounce1 {
            animation-delay: -0.32s;
        }
        .bounce2 {
            animation-delay: -0.16s;
        }

        &>div{
            width: 30px;
            height: 30px;
            background-color: #67CF22;

            border-radius: 100%;
            display: inline-block;
            animation: bouncedelay 1.4s infinite ease-in-out;
            /* Prevent first frame from flickering when animation starts */
            animation-fill-mode: both;
        }

        @keyframes bouncedelay {
            0%, 80%, 100% {
                transform: scale(0.0);
            } 40% {
                  transform: scale(1.0);
              }
        }
    }
    .spinner7{
        width: 40px;
        height: 40px;
        margin: 0 auto;
        background-color: #67CF22;
        border-radius: 100%;
        animation: scaleout 1.0s infinite ease-in-out;
        @keyframes scaleout {
            0% {
                transform: scale(0.0);
            } 100% {
                  transform: scale(1.0);
                  opacity: 0;
              }
        }
    }
    .spinner8{
        margin: 0 auto;
        width: 20px;
        height: 20px;
        position: relative;

        .container1 > div, .container2 > div, .container3 > div {
            width: 6px;
            height: 6px;
            background-color: #67CF22;

            border-radius: 100%;
            position: absolute;
            animation: bouncedelay 1.2s infinite ease-in-out;
            animation-fill-mode: both;
        }

        .spinner-container {
            position: absolute;
            width: 100%;
            height: 100%;
        }

        .container2 {
            transform: rotateZ(45deg);
        }

        .container3 {
            transform: rotateZ(90deg);
        }

        .circle1 { top: 0; left: 0; }
        .circle2 { top: 0; right: 0; }
        .circle3 { right: 0; bottom: 0; }
        .circle4 { left: 0; bottom: 0; }

        .container2 .circle1 {
            animation-delay: -1.1s;
        }

        .container3 .circle1 {
            animation-delay: -1.0s;
        }

        .container1 .circle2 {
            animation-delay: -0.9s;
        }

        .container2 .circle2 {
            animation-delay: -0.8s;
        }

        .container3 .circle2 {
            animation-delay: -0.7s;
        }

        .container1 .circle3 {
            animation-delay: -0.6s;
        }

        .container2 .circle3 {
            animation-delay: -0.5s;
        }

        .container3 .circle3 {
            animation-delay: -0.4s;
        }

        .container1 .circle4 {
            animation-delay: -0.3s;
        }

        .container2 .circle4 {
            animation-delay: -0.2s;
        }

        .container3 .circle4 {
            animation-delay: -0.1s;
        }

        @keyframes bouncedelay {
            0%, 80%, 100% {
                transform: scale(0.0);
            } 40% {
                  transform: scale(1.0);
              }
        }


    }
</style>
<script>
</script>


