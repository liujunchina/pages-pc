/**
 * Created by Liu.Jun on 2016/10/16.
 */

module.exports = function(){
    return {
        'index':{
            title:'demo列表',
            component:require('./index.vue')
        },
        '/css3-3d-nav':{
            title:'css3 3D导航效果',
            component:require('./css3-3d-nav.vue')
        },
        'css3-light':{
            title:'css3鼠标滑过闪光效果',
            component:require('./css3-light.vue')
        }
    };
};