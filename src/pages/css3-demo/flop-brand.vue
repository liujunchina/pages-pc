<template>
    <div>
        <div class="back">
            <a v-link="{name:'index'}">返回首页</a>
        </div>
        <div class="viewport">
            <p>你想翻哪个牌子呢</p>
            <div class="item">
                <div class="front">
                    <div class="img_info">
                        美女二号
                    </div>
                </div>
                <div class="backface">
                    <img src="./img/mm1.jpg" alt=""/>
                </div>
            </div>
            <div class="item">
                <div class="front">
                    <div class="img_info">
                        美女三号
                    </div>
                </div>
                <div class="backface">
                    <img src="./img/mm2.jpg" alt=""/>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" rel="stylesheet/scss" scoped>
    .viewport {
        font-size: 0;
        .item{
            font-size: 16px;
            position: relative;
            width: 270px;
            height: 360px;
            display: inline-block;
            text-align: center;
            vertical-align: top;
            margin: 0 10px;
            &>div {
                position: absolute;
                width: 100%;
                height: 100%;
                left: 0;
                top: 0;
            }
            &:hover{
                .front {
                    opacity: 0;
                    transform:rotateY(-180deg);
                }
                .backface{
                    opacity: 1;
                    transform:rotateY(0deg);
                }
            }
        }
        .front,.backface{
            transition: all 0.6s ease;
            backface-visibility: hidden; /*背面不可见*/
        }
        .front{
            display: flex;
            justify-content: center; /*水平居中*/
            align-items:center; /*垂直居中*/
            opacity: 1;
            transform:rotateY(0deg);
            background-color: rgba(65, 149, 122, 0.8);
        }

    }
</style>
