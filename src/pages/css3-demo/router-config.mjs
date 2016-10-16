/**
 * Created by Liu.Jun on 2016/10/16.
 */

import routerMap from './router-map.mjs'

module.exports = function (router) {
    router.map(routerMap());
    router.redirect({
        '*':'index'
    })
};

