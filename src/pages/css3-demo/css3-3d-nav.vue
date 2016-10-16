<template>
    <div class="css3-3d-nav">
        <div class="back">
            <a v-link="{name:'index'}">返回首页</a>
        </div>
        <ul class="nav">
            <li>
                <div class="bg">
                    <a href="#">首页</a>
                    <a href="#">home</a>
                </div>
            </li>
        </ul>
    </div>
</template>
<style lang="scss" rel="stylesheet/scss" scoped>
    .nav {
        height: 100px;
        li {
            width: 200px;
            height: 100%;
            text-align: center;
            perspective-origin:50% 50%;
            perspective:2000px;
            &:hover{
                .bg{
                    transform: rotateX(90deg);
                }
            }
        }
        .bg{
            position: relative;
            width: 100%;
            height: 100%;
            transform: rotateX(0deg);
            transform-style: preserve-3d;
            transition: transform 0.3s;
            a{
                position: absolute;
                display: block;
                width:100%;
                height: 100%;
                line-height: 100px;
                text-align: center;
                text-decoration: none;
                color: #ffffff;
                font-size: 30px;
                &:nth-child(1){
                    transform:translateZ(50px);
                    background-color: black;
                }
                &:nth-child(2){
                    transform: rotateX(-90deg) translateZ(50px);
                    background-color:burlywood;
                }
            }
        }

    }
</style>
<script>
</script>


