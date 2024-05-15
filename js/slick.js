$(document).ready(function(){
  $('.clothes-slide').slick({
      dots: false,
      infinite: true,
      speed: 800,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: false,
      responsive: [
          {
              breakpoint: 1200,
              settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
              }
          },
          {
              breakpoint: 992,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
              }
          },
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  arrows: false,
              }
          },
      ]
  });

  $('.clothes-slider-nav .prev').click(function(){
      $('.clothes-slide').slick('slickPrev');
  });

  $('.clothes-slider-nav .next').click(function(){
      $('.clothes-slide').slick('slickNext');
  });
});


$(document).ready(function(){
  $('.about-slider').slick({
      dots: false,
      infinite: true,
      speed: 800,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: false,
      responsive: [
          {
              breakpoint: 1200,
              settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
              }
          },
          {
              breakpoint: 992,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
              }
          },
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  arrows: false,
              }
          },
      ]
  });
});


$(document).ready(function(){
  $('.about-slider-two').slick({
      dots: false,
      infinite: true,
      speed: 800,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: false,
      responsive: [
          {
              breakpoint: 1200,
              settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
              }
          },
          {
              breakpoint: 992,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
              }
          },
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  arrows: false,
              }
          },
      ]
  });

  $('.clothes-slider-nav .prev').click(function(){
      $('.clothes-slide').slick('slickPrev');
  });

  $('.clothes-slider-nav .next').click(function(){
      $('.clothes-slide').slick('slickNext');
  });
});
