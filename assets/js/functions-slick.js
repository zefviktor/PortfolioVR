
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


$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    centerMode: true,
    focusOnSelect: true,
    variableWidth: true
});

$('.variable-width').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
});


//
// $(document).ready(function() { // Ждём загрузки страницы
//
//     $(".image").click(function(){	// Событие клика на маленькое изображение
//         var img = $(this);	// Получаем изображение, на которое кликнули
//         var src = img.attr('src'); // Достаем из этого изображения путь до картинки
//         $("body").append("<div class='popup'>"+ //Добавляем в тело документа разметку всплывающего окна
//             "<div class='popup_bg'></div>"+ // Блок, который будет служить фоном затемненным
//             "<img src='"+src+"' class='popup_img' />"+ // Само увеличенное фото
//             "</div>");
//         $(".popup").fadeIn(800); // Медленно выводим изображение
//         $(".popup_bg").click(function(){	// Событие клика на затемненный фон
//             $(".popup").fadeOut(800);	// Медленно убираем всплывающее окно
//             setTimeout(function() {	// Выставляем таймер
//                 $(".popup").remove(); // Удаляем разметку всплывающего окна
//             }, 800);
//         });
//     });
//
// });