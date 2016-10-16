/**
 * Created by Liu.Jun on 2016/10/16.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

import configRouter from './router-config.mjs';

Vue.use(VueRouter);
const router = new VueRouter();

// 路由配置
configRouter(router);
require('commonjs/routerBefore.js')(router);

// 启动路由
router.start(Vue.extend(require('./app.vue')), '#app');