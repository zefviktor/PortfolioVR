
window.onload = function(e){
    var item1 = document.querySelectorAll('.section:nth-child(2n) .icon__subtitle-item');
    var item2 = document.querySelectorAll('.section:nth-child(2n+1) .icon__subtitle-item');
    var item3 = document.querySelectorAll('.section:nth-child(2n) .block__item');
    var item4 = document.querySelectorAll('.section:nth-child(2n+1) .block__item');
    var item5 = document.querySelectorAll('.section:nth-child(2n)');

    var itemOn1 = document.querySelectorAll('.section:nth-child(2n) .icon__range-item-on');
    var itemOn2 = document.querySelectorAll('.section:nth-child(2n+1) .icon__range-item-on');

    var itemOff1 = document.querySelectorAll('.section:nth-child(2n) .icon__range-item-off');
    var itemOff2 = document.querySelectorAll('.section:nth-child(2n+1) .icon__range-item-off');

    for( var i = 0; i < item1.length; i++){
        item1[i].classList.add('item1')
    }

    for( var i = 0; i < item2.length; i++){
        item2[i].classList.add('item2')
    }

    for( var i = 0; i < item3.length; i++){
        item3[i].classList.add('item3')
    }

    for( var i = 0; i < item4.length; i++){
        item4[i].classList.add('item4')
    }

    for( var i = 0; i < item5.length; i++){
        item5[i].classList.add('item5')
    }
    for( var i = 0; i < itemOn1.length; i++){
        itemOn1[i].classList.add('itemOn1')
    }

    for( var i = 0; i < itemOn2.length; i++){
        itemOn2[i].classList.add('itemOn2')
    }

    for( var i = 0; i < itemOff1.length; i++){
        itemOff1[i].classList.add('itemOff1')
    }

    for( var i = 0; i < itemOff2.length; i++){
        itemOff2[i].classList.add('itemOff2')
    }

    hs.graphicsDir = 'highslide/graphics/';
    hs.wrapperClassName = 'your-own-style';

};

jQuery(function ($) {
    function fix_size() {
        var images = $('.slider__one-img');
        images.each(setsize);

        function setsize() {
            var img = $(this),
                img_dom = img.get(0),
                container = img.parents('.slider__one-container');
            if (img_dom.complete) {
                resize();
            } else img.one('load', resize);

            function resize() {
                if ((container.width() / container.height()) < (img_dom.width / img_dom.height)) {
                    img.width('100%');
                    img.height('auto');
                    return;
                }
                img.height('100%');
                img.width('auto');
            }
        }
    }
    $(window).on('resize', fix_size);
    fix_size();
});
