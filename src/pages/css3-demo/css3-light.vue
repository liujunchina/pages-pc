<template>
    <div class="css3-light">
        <div class="back">
            <a v-link="{name:'index'}">返回首页</a>
        </div>
        <div class="over-img">
            <div class="img"></div>
        </div>
    </div>
</template>

<style rel="stylesheet/scss" lang="scss" scoped>
    .over-img{
        position: relative;
        width: 250px;
        height: 200px;
        .img {
            width: 100%;
            height: 100%;
            background-color: #595959;
        }
        &:after{
            content: '';
            cursor: pointer;
            position: absolute;
            left: -150px;
            top: 0;
            width: 100px;
            height: 220px; /* 根据图像高度自行修改 */
            background-image: linear-gradient(0deg,rgba(255,255,255,0),rgba(255,255,255,0.2),rgba(255,255,255,0));
            transform: skewx(-25deg) translateZ(0px);
            transition: left 0.5s;
        }
        &:hover{
            &:after{
                left: 290px;
            }
        }
    }
</style>