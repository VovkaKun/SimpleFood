$(function () {

  $('.select__style').styler();

  var $range = $(".filter-price__input");
  var $inputFrom = $('.filter-price__from');
  var $inputTo = $('.filter-price__to');
  var instance;
  var min = 0;
  var max = 1000;
  var from = 0;
  var to = 0;

  $range.ionRangeSlider({
    skin: "round",
    type: "double",
    min: min,
    max: max,
    from: 150,
    to: 800,
    onStart: updateInputs,
    onChange: updateInputs,
    onFinish: updateInputs
  });
  instance = $range.data("ionRangeSlider");

  function updateInputs(data) {
    from = data.from;
    to = data.to;

    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);
  }

  $inputFrom.on("change", function () {
    var val = $(this).prop("value");

    // validate
    if (val < min) {
      val = min;
    } else if (val > to) {
      val = to;
    }

    instance.update({
      from: val
    });

    $(this).prop("value", val);

  });

  $inputTo.on("change", function () {
    var val = $(this).prop("value");

    // validate
    if (val < from) {
      val = from;
    } else if (val > max) {
      val = max;
    }

    instance.update({
      to: val
    });

    $(this).prop("value", val);
  });



  $('.burger, .menu__list, .address, .menu__filter').on('click', function () {
    $(this).toggleClass('active');
  });

  $('.filter-btn').on('click', function () {
    $('.filter-btn').toggleClass('active');
    $('.menu__filter').toggleClass('active');
    $('.prospectus__select').toggleClass('active');
    $('.breadcrumbs').toggleClass('active');
    $('.header__btn').toggleClass('active');
    $('.burger-bg').toggleClass('none');
    $('.body').toggleClass('bg');
    $('.main').toggleClass('trans');
    $('.burger__line--fix').removeClass('active');
    $('.burger__line').toggleClass('active');
    $('.burger--catalog').toggleClass('active');
    $('.footer').toggleClass('none');
    $('.menu__list').toggleClass('active');
    $('.prospectus__box').toggleClass('active');
    $('.logo').toggleClass('active');
    $('.header__btn').toggleClass('active');
    $('.burger.burger--catalog').toggleClass('bg');
  });

  $('.menu__list, .address').on('click', function () {
    $('.burger').removeClass('active');
    $('.burger__line').removeClass('active');
    $('.body').removeClass('bg');
    $('.main').removeClass('trans');
    $('.footer').removeClass('trans');
    $('.menu__filter').removeClass('active');
    $('.prospectus__select').removeClass('active');
    $('.breadcrumbs').removeClass('active');
    $('.header__btn').removeClass('active');
    $('.logo').removeClass('active');
    $('.prospectus__box').removeClass('active');
  });

  $('.menu__filter').on('click', function () {
    $('.menu__filter').removeClass('active');
    $('.menu__list').removeClass('active');
    $('.body').removeClass('bg');
    $('.burger__line').removeClass('active');
    $('.breadcrumbs').removeClass('active');
    $('.burger').removeClass('active');
    $('.prospectus__box').removeClass('active');
    $('.main').removeClass('trans');
    $('.prospectus__select').removeClass('active');
    $('.footer').removeClass('none');
  });

  $('.burger').on('click', function () {
    $('.body').toggleClass('bg');
    $('.main').toggleClass('trans');
    $('.menu__list').toggleClass('active');
    $('.burger__line').toggleClass('active');
    $('.burger__line--fix').removeClass('active');
    $('.footer').toggleClass('trans');
    $('.logo').toggleClass('logo--menu');
    $('.breadcrumbs').toggleClass('active');
    $('.prospectus__box').toggleClass('active');
    $('.menu__filter').removeClass('active');
    $('.burger-bg').removeClass('none');
    $('.logo').toggleClass('active');
  });

  $('.burger.burger--catalog').on('click', function () {
    $('.prospectus__select').toggleClass('active');
    $('.burger.burger--catalog').removeClass('bg');
  });

  var mixer = mixitup('.popular__list')


  $('.reviews__inner').slick({
    dots: true,

    prevArrow: '<button class="slick-arrow--prev" type="button"><svg class="slick-arrow__icon--prev" width="34" height="34"><use xlink:href="images/images.svg#prev-arrow"></use></svg><span class="sr-only">поиск блюда</span></button>',

    nextArrow: '<button class="slick-arrow--next" type="button"><svg class="slick-arrow__icon--next" width="34" height="34"><use xlink:href="images/images.svg#next-arrow"></use></svg><span class="sr-only">поиск блюда</span></button>',

    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: false
        }
      }
    ]

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

  if (window.matchMedia("(max-width: 576px)").matches) {
    $('.restaurant__list').slick({
      dots: true,
      arrows: false,
    });

  } else {

  }
});