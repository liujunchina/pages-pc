var $ = window.jQuery;

$.throttle = function(fn, delay) {
    var timer = null;
    return function() {
        var context = this,
            args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function() {
            console.log('fasdf')
            fn.apply(context, args);
        }, delay);
    };
};

$.rsElm = function ($container,options) {
    this.options = $.extend({},$.rsElm.defaults,options);
    this.$container = $container;
};

$.rsElm.prototype = {
    getCurrentWidth : function(){
        var sectionW = $(window).width();
        if (sectionW == 0) sectionW = $(document.body).width();
        if(sectionW <= this.options.minWidth) sectionW = this.options.minWidth;
        return sectionW;
    },
    getCurrentHeight : function(){
        var sectionH = $(window).height();
        if (sectionH == 0) sectionH = $(document.body).height();
        if(sectionH <= this.options.minHeight) sectionH = this.options.minHeight;
        return sectionH;
    },
    init:function () {
        this.$cacheElm =  null;

        this.currentWidth = this.getCurrentWidth();
        this.currentHeight = this.getCurrentHeight();

        // this.$cacheElm = {
        //     bgElm:null,
        //     divElm:null
        // };
        //

        this.reset();
        this.bindEvent();
    },
    _getElm:function () {
        if(undefined == this.$cacheElm){
            this.$cacheElm = {
                bgElm : this.$container.find(this.options.bgImg),
                divElm: this.$container.find(this.options.divImg)
            }
        }
        return this.$cacheElm;
    },
    reset:function () {
        var elm = this._getElm();
        this.currentWidth = this.getCurrentWidth();
        this.currentHeight = this.getCurrentHeight();
        this._resetBg(elm.bgElm);
        this._resetDiv(elm.divElm);
    },
    _resetBg:function ($bg) {
        var  self = this;
        $bg.each(function () {
            var currentImgWidth,
                currentImgHeight,
                $this = $(this),
                xxx = self.currentWidth / self.currentHeight,
                ooo = $this.data("dw") / $this.data("dh");

            // 浏览器宽高比大于图片
            if(xxx > ooo){
                currentImgWidth = self.currentWidth;
                currentImgHeight = Math.round(currentImgWidth / ooo);
            }else{
                currentImgHeight = self.currentHeight;
                currentImgWidth = Math.round(currentImgHeight * ooo);
            }

            // 设置水平居中
            if($this.hasClass('center')){
                $this.css({
                    width: currentImgWidth,
                    height: currentImgHeight,
                    left : '50%',
                    marginLeft : - Math.round(currentImgWidth / 2 ) + "px"
                })
            }

            // 设置垂直居中
            if($this.hasClass('middle')){
                $this.css({
                    width: currentImgWidth,
                    height: currentImgHeight,
                    top : '50%',
                    marginTop : - Math.round(currentImgHeight / 2 ) + "px"
                })
            }
        });
    },
    _resetDiv:function ($div) {
        var zoom ;
        if(this.options.resizeCalculated === 'height'){
            zoom = this.currentHeight / this.options.defaultHeight;
        }else{
            zoom = this.currentWidth / this.options.defaultWidth;
        }

        $div.each(function () {
            var $this = $(this);
            var imgW = Math.round($this.data("dw") * zoom );
            var imgH = Math.round($this.data("dh") * zoom );

            if($this.hasClass("center")){
                $this.css({
                    // "left": "50%", 改成通过css手动去设置
                    marginLeft : - (imgW / 2 ) + "px",
                    width : imgW + "px",
                    height : imgH + "px"
                });
            }

            if($this.hasClass("middle")){
                $this.css({
                    // "top": "50%", 改成通过css手动去设置
                    marginTop : - (imgH / 2)  + "px",
                    width : imgW + "px",
                    height : imgH + "px"
                });
            }
        });
    },
    bindEvent:function () {
        // resize event
        var self = this,
            resizeFn =$.throttle(self.reset,600);
        $(window).resize(function () {
            resizeFn.call(self);
        });
    }
};

$.rsElm.defaults = {
    bgImg: '.j_bg',             // 背景保证适应铺满整个屏幕
    divImg: '.j_div',           // 根据高度或者宽度自适应
    defaultWidth : 1920,        // 默认尺寸
    defaultHeight: 750,         // 默认尺寸
    resizeCalculated : 'width'  // resize 计算方式， width / height
};

$.fn.rsElm  = function (options) {
    options = options || {};
    if(this.length > 0){
        return $.each(this,function () {
            (new $.rsElm($(this),options)).init();
        });
    }
    return this;
};

module.exports = $;