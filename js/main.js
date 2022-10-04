$(document).ready(function () {

  // Show menu header
  $('.navbar-toggle--header').on('click', function() {
    $(this).toggleClass('active');
    $('.nav').slideToggle(200);
  });

  if($(window).width() < 768) {
    $(document).on('click', function (event) {
      if ($(event.target).closest('.navbar-toggle--header').length 
        || $(event.target).closest('.nav').length ) return;
        $('.nav').slideUp();
        $('.navbar-toggle--header').removeClass('active');
        event.stopPropagation();
    });
  };

  // Show menu footer
  $('.navbar-toggle--footer').on('click', function() {
    $(this).toggleClass('active');
    $('.nav-footer').slideToggle(200);
  });

  // Open mobail search
  $('.btn-mob__item--search').on('click', function() {
    $('.search').fadeToggle(200);
  });

  if($(window).width() < 768) {
    $(document).on('click', function (event) {
      if ($(event.target).closest('.btn-mob__item--search').length 
        || $(event.target).closest('.search').length ) return;
        $('.search').fadeOut(200);
        event.stopPropagation();
    });
  };

  // Copyright
  $(function() {
    $('.copyright__date').text( (new Date).getFullYear() );
  });

  // Calendar
  $( function() {
    $("#datepicker").datepicker();
  } );

  // Subnav
  var swiper1 = new Swiper(".subnav__swipe", {
    freeMode: true,
    spaceBetween: 0,
    slidesPerView: "auto",
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    slideToClickedSlide: true,
    mousewheel: true
  });

  // Slider
  var swiper = new Swiper(".slider__sl", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 1,
    centeredSlides: true,
    loopAdditionalSlides: 1,
    autoplay: {
     delay: 3000,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      992: {
        slidesPerView: 'auto',
      },
    },
  });

  // Reference
  var swiper = new Swiper(".reference__sl", {
    spaceBetween: 15,
    slidesPerView: 'auto',
    breakpoints: {
      768: {
        slidesPerView: 4,
      },
      1200: {
        spaceBetween: 30,
        slidesPerView: 4,
      },
    },
  });

});