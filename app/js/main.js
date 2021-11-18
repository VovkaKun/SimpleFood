$(function () {
  $(".popular__link").click(function (e) {
    e.preventDefault();
    $(".popular__link").removeClass('popular__link-active');
    $(this).addClass('popular__link-active');
  })
})