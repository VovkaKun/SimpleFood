$(function () {

  var mixer = mixitup('.popular__box')

  $('.reviews__inner').slick({
    dots: true,

    prevArrow: '<svg class="prevArrow" width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="18.5" fill-opacity="0.01" stroke-width="3"/><path d="M21.1968 29.0492L13.4508 21.3033C12.8497 20.699 12.8497 19.7231 13.4508 19.1189L21.1968 11.3729C21.7761 10.8757 22.6328 10.8757 23.2122 11.3729C23.8614 11.9291 23.9372 12.9082 23.3811 13.5573L16.7351 20.2033L23.3811 26.8648C23.9822 27.469 23.9822 28.445 23.3811 29.0492C22.7769 29.6503 21.8009 29.6503 21.1968 29.0492Z"/></svg>',

    nextArrow: '<svg class="nextArrow" width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="18.5" fill-opacity="0.01" stroke-width="3"/><path d="M18.6352 11.4508L26.3811 19.1967C26.9822 19.801 26.9822 20.7769 26.3811 21.3811L18.6352 29.1271C18.0558 29.6243 17.1991 29.6243 16.6197 29.1271C15.9706 28.5709 15.8947 27.5918 16.4509 26.9427L23.0968 20.2967L16.4508 13.6352C15.8497 13.031 15.8497 12.055 16.4508 11.4508C17.055 10.8497 18.031 10.8497 18.6352 11.4508Z"/></svg>'
  });

  $('.nextArrow.slick-arrow').on('click', function () {
    $('.nextArrow.slick-arrow').addClass('active')
  });

  $('.prevArrow.slick-arrow').on('click', function () {
    $('.nextArrow.slick-arrow').removeClass('active')
    $('.prevArrow.slick-arrow').addClass('active')
  });

  $('.prevArrow.slick-arrow').on('click', function () {
    $('.prevArrow.slick-arrow').addClass('active')
  });

  $('.nextArrow.slick-arrow').on('click', function () {
    $('.prevArrow.slick-arrow').removeClass('active')
    $('.nextArrow.slick-arrow').addClass('active')
  });


});