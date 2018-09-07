//Фидбэк
$('.header__menu').click(function (e) {
  e.preventDefault();
  $('.navigation').addClass('navigation_active');
});
$('.navigation__cross').click(function (e) {
  e.preventDefault();
  $('.navigation').removeClass('navigation_active');
});
//Ресайз
function myFunction() {
  if ($(window).width() < 768) {
    $('.header__input').focus(function (e) {
      $('.header__search').addClass('header__search_active');
    });
    $('.header__input').blur(function (e) {
      $('.header__search').removeClass('header__search_active');
    });

  }
}
myFunction();
$(window).resize(function () {
  myFunction();
});
//-Прелоадер
var
    images = document.images,
    images_total_count = images.length,
    images_loaded_count = 0;
perc_display = document.getElementById('count');

for (var i = 0; i < images_total_count; i++) {
    image_clone = new Image();
    image_clone.onload = image_loaded;
    image_clone.onerror = image_loaded;
    image_clone.src = images[i].src;
}
// console.log(images_total_count);
// console.log(images_loaded_count);
function image_loaded() {
    images_loaded_count++;
    perc_display.innerHTML = (((100 / images_total_count) * images_loaded_count) << 0) + '%';

    if (images_loaded_count >= images_total_count) {
        $(window).on('load', function () {
            $('.wrapper').removeClass('visuallyhidden');
            $('.preloader').delay(2000).fadeOut(2000);
        });
    }
};