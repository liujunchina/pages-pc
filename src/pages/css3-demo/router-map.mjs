/**
 * Created by Liu.Jun on 2016/10/16.
 */

module.exports = function(){
    return {
        '/index':{
            name: 'index',
            title:'demo列表',
            component:require('./index.vue')
        },
        '/css3-3d-nav':{
            name:'css3-3d-nav',
            title:'css3 3D导航效果',
            component:require('./css3-3d-nav.vue')
        },
        '/css3-light':{
            name:'css3-light',
            title:'css3鼠标滑过闪光效果',
            component:require('./css3-light.vue')
        },
        '/flop-brand':{
            name:'flop-brand',
            title:'css3翻牌子效果',
            component:require('./flop-brand.vue')
        },
        '/css3-3d-carousel':{
            name:'css3-3d-carousel',
            title:'css3旋转木马效果',
            component:require('./css3-3d-carousel.vue')
        },
        '/requestAnimationFrame':{
            name:'requestAnimationFrame',
            title:'requestAnimationFrame ',
            component:require('./requestAnimationFrame.vue')
        },
        '/load-animation':{
            name:'load-animation',
            title:'css3加载动画',
            component:require('./load-animation.vue')
        }
    };
};