<template>
    <div>
        <div class="back">
            <a v-link="{name:'index'}">返回首页</a>
        </div>
        <p class="tip">点击任意图片浏览：</p>
        <div class="carousel">
            <div @click="onRotate" class="j_container container" :style="{transform: 'rotateY(' + transformDeg + 'deg)'}">
                <img v-for="item in imgList" class="img" :style="{transform: transform[$index]}" :id="'item' + item" :src="'/images/mm' + item + '.jpg'" alt="" width="128">
            </div>
        </div>
    </div>
</template>
<style lang="scss" rel="stylesheet/scss" scoped>
    .carousel{
        width: 600px;
        min-height: 100px;
        padding: 100px 30px;
        perspective: 800px;
        background-color: #f0f0f0;
        box-shadow: inset 0 0 3px rgba(0,0,0,.35);
        .tip{
            padding: 30px 0;
        }
        .container{
            position: absolute;
            left: 50%;
            width: 128px;
            height: 100px;
            margin-left: -64px;
            transform:rotateY(0deg);
            transition: transform 1s;
            transform-style: preserve-3d;
        }
        .img{
            position: absolute;
            bottom: 0;
            width: 128px;
            box-shadow: 0 1px 3px rgba(0,0,0,.5);
            transition: opacity 1s, transform 1s;
        }
    }

</style>
<script>
    let rotate = 0;
    module.exports = {
        data: function () {
            return {
                imgList:[1, 8, 3, 4, 7, 10, 13, 15],
                transform:[],
                transformDeg: 0
            }
        },
        computed:{

        },
        methods: {
            onRotate(){
                this.transformDeg -= rotate;
            }
        },
        init(){
        },
        created(){
            rotate = 360 / this.imgList.length;
            let transZ = (128/2) / Math.tan((rotate / 2 / 180) * Math.PI),
                transform = [];
            this.imgList.forEach((value,index)=>{
                transform.push("rotateY("+ index * rotate +"deg) translateZ("+ (transZ + 20) +"px)");
            });
            this.transform = transform;
        },
        ready(){

        }
    }
</script>


