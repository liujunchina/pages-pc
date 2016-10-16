<template>
    <div class="wrap">
        <router-view class="view" transition="css3" transition-mode="out-in" keep-alive></router-view>
    </div>
</template>
<style lang="scss" rel="stylesheet/scss">
    body{
        color:#595959;
    }
    .wrap{
        padding: 20px 40px;
        .view {
            transition: all .5s ease;
        }
        .css3-enter, .css3-leave {
            opacity: 0;
            transform: translate3d(0, 10px, 0);
        }
        h1{
            font-size: 40px;
            padding: 26px 0;
            text-align: center;
        }
        .title,.tip{
            padding: 10px 0;
            font-size: 32px;
        }
    }
</style>