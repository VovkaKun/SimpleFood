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



  $('.burger, .menu__list, .address').on('click', function () {
    $(this).toggleClass('active');
  });

  $('.menu__list, .address').on('click', function () {
    $('.burger').removeClass('active');
    $('.burger__line').removeClass('active');
    $('.body').removeClass('bg');
    $('.main').removeClass('trans');
    $('.footer').removeClass('trans');
  });

  $('.burger').on('click', function () {
    $('.body').toggleClass('bg');
    $('.main').toggleClass('trans');
    $('.menu__list').toggleClass('active');
    $('.burger__line').toggleClass('active');
    $('.burger__line--fix').removeClass('active');
    $('.footer').toggleClass('trans');
  });

  var mixer = mixitup('.popular__list')

  $('.reviews__inner').slick({
    dots: true,

    prevArrow: '<button class="prevarrow__btn" type="button"><svg class="prevArrow" width="34" height="34"><use xlink:href="images/images.svg#prev-arrow"></use></svg><span class="sr-only">поиск блюда</span></button>',

    nextArrow: '<button class="nextarrow__btn" type="button"><svg class="nextArrow" width="34" height="34"><use xlink:href="images/images.svg#next-arrow"></use></svg><span class="sr-only">поиск блюда</span></button>',

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
      arrows: false
    });

  } else {

  }


});