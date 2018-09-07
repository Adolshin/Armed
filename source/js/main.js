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
//Вызов поиска на таблетке
// var inp = $('.header__input')
// if (!inp.value) {
//   $('.header__input-submit_click').click(function (e) {
//     e.preventDefault();
//     $('.header__input').toggleClass('header__input_active');  
//   });
// }

// $('.header__input-cross').click(function (e) {
//   e.preventDefault();
//   $('.header__input').removeClass('header__input_active'); 
// });