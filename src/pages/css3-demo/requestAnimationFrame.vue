<template>
    <div>
        <div class="back">
            <a v-link="{name:'index'}">返回首页</a>
        </div>
        <p class="tip">requestAnimationFrame {{end}}</p>
        <div class="test">
            <div class="animation">
                <div class="bg-color" :style="{width:progress + '%'}">
                    {{progress}}%
                </div>
            </div>
            <div class="contr">
                <button @click="start">开始</button>
                <button @click="stop">结束</button>
            </div>
        </div>
    </div>
</template>
<style lang="scss" rel="stylesheet/scss" scoped>
    .test{
        padding: 20px 0;
    }
    .animation{
        position: relative;
        height: 50px;
        margin: 20px 0;
        border: 1px solid #CCC;
        .bg-color{
            position: absolute;
            width: 0;
            height: 100%;
            line-height: 50px;
            left: 0;
            top: 0;
            background-color: rebeccapurple;
            font-size: 20px;
            color: red;
        }
    }
</style>
<script>
    require('commonjs/requestAnimationFrame.js');
    var raf;
    module.exports = {
        data(){
            return {
                progress: 0,
                end:''
            }
        },
        methods:{
            start(){
                var self = this;
                this.stop();
                this.end = '运行中...';
                self.progress = 0;
                function loop() {
                    self.progress++;
                    if(self.progress < 100){
                        raf = window.requestAnimationFrame(loop)
                    }else{
                        self.end = '结束'
                    }
                }
                loop()
            },
            stop(){
                window.cancelAnimationFrame(raf);
            }
        }
    }
</script>


