/**
 * Created by Liu.Jun on 2016/10/17.
 */

import Base from 'base';
require('./fullpage.scss');
import avalon from 'avalon';
let $fullpage = $('#j_fullPage');

let fullPage = {
    init:function () {
        this.testImagesLoaded();
        this.testFullPage();
    },
    testImagesLoaded:function () {
        $fullpage.imagesLoaded({
            background: '.bgimg'    //
        })
        .always(function (instance) {
            console.log('all images loaded');
        })
        .done(function (instance) {
            console.log('all images successfully loaded');
        })
        .fail(function () {
            console.log('all images loaded, at least one is broken');
        })
        .progress(function (instance, image) {
            var result = image.isLoaded ? 'loaded' : 'broken';
            console.log('image is ' + result + ' for ' + image.img.src);
        });
    },
    testFullPage:function () {
        $('#j_fullPage').fullpage({
            verticalCentered: false, // 内容是否垂直居中 css3，不兼容ie7
            resize: false,           // 字体是否resize 通过rem单位控制 不兼容ie7
            // anchors:['page1','page2','page3','page4'],   //定义锚链接 （hashChange ie不兼容部分bug）
            // menu:'#j_menu',          //绑定菜单，设定的相关属性与 anchors 的值对应后，菜单可以控制滚动
            scrollingSpeed: 700,     // 滚动速度
            easing: 'easeInOutQuart',   // 动画方式
            navigation: true,        // 是否显示项目导航
            navigationPosition: 'left',  //项目导航的位置，可选 left 或 right
            navigationColor:'#333',      //项目导航的颜色
            navigationTooltips: ['page11','page22','page33','page44'],       // 项目导航的 tip
            slidesNavigation:false,	    // 是否显示左右滑块的项目导航
            slidesNavPosition:'bottom',	// 左右滑块的项目导航的位置，可选 top 或 bottom
            controlArrowColor:'#fff',	// 左右滑块的箭头的背景颜色
            loopBottom: false,          // 滚动到最底部后是否滚回顶部
            loopTop:false,              // 滚动到最顶部后是否滚底部
            loopHorizontal: true,       // 左右滑块是否循环滑动
            autoScrolling: true,       // 是否使用插件的滚动方式，如果选择 false，则会出现浏览器自带的滚动条
            scrollOverflow: false,      // 内容超过满屏后是否显示滚动条
            // css3:true,                 // 	是否使用 CSS3 transforms 滚动
            paddingTop: 0, //与顶部的距离
            paddingBottom:0, //	与底部距离
            fixedElements:'', //
            normalScrollElements:'',
            keyboardScrolling:true, // 是否使用键盘方向键导航
            touchSensitivity:5, //
            continuousVertical: false, //是否循环滚动，与 loopTop 及 loopBottom 不兼容
            animateAnchor: true,
            normalScrollElementTouchThreshold:5,
            afterRender:function () {
                $.fn.fullpage.setKeyboardScrolling(false);
                $.fn.fullpage.setAllowScrolling(false);

                let vm = avalon.define({
                    $id:'fullPageCtl',
                });
            },
        });

        /**
         {
             // 滚动到某一屏后的回调函数，接收 anchorLink 和 index 两个参数，anchorLink 是锚链接的名称，index 是序号，从1开始计算
             afterLoad:function (anchorLink,index) {

             },
             onLeave:function (index,nextIndex,direction ) {
                  *  滚动前的回调函数，接收 index、nextIndex 和 direction 3个参数：index 是离开的“页面”的序号，从1开始计算；
                  *  nextIndex 是滚动到的“页面”的序号，从1开始计算；
                  *  direction 判断往上滚动还是往下滚动，值是 up 或 down。
             },
             afterRender:function () {
             },
             afterSlideLoad:function (anchorLink,index,slideIndex,direction) {
                  * 横向滑块
                  * 滚动到某一水平滑块后的回调函数，与 afterLoad 类似，接收 anchorLink、index、slideIndex、direction 4个参数
             },
             onSlideLeave:function () {
                  * 横向滑块
                  * 某一水平滑块滚动前的回调函数，与 onLeave 类似，接收 anchorLink、index、slideIndex、direction 4个参数
             }
         }
         */

        /**
         * 方法
         * $.fn.fullpage.moveSectionUp()
         * moveSectionUp()	向上滚动
         * moveSectionDown()	向下滚动
         * moveTo(section, slide)	滚动到
         * moveSlideRight()	slide 向右滚动
         * moveSli eLeft()	slide 向左滚动
         * setAutoScrolling()	设置页面滚动方式，设置为 true 时自动滚动
         * setAllowScrolling()	添加或删除鼠标滚轮/触控板控制
         * setKeyboardScrolling()	添加或删除键盘方向键控制
         * setScrollingSpeed()	定义以毫秒为单位的滚动速度
         */
    }
};

fullPage.init();

// vm.$watch('onReady', function(){
//     //页面上每个ms-controller, ms-important元素
//     //在其区域内的所有ms-*指令被扫描后会执行
//     debugger
//     fullPage.init();
// });
//
// //2.1.15起支持
// vm.$watch('onDispose', function(){
//     delete avalon.vmodels[vm.$id]
//     if(avalon.scopes){
//         delete avalon.scopes[vm.$id]
//     }
// });
