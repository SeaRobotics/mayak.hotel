jQuery(document).ready(function($){



$('.reviews_main').slick({
  centerPadding: '40',
  prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"></button>',
  nextArrow: '<button class="slick-next" aria-label="Next" type="button"></button>',
  slidesToShow: 2,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    }
  ]
});

$('.video_slider').slick({
  centerPadding: '40',
  autoplay:true,
  autoplaySpeed:4000,
  prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"></button>',
  nextArrow: '<button class="slick-next" aria-label="Next" type="button"></button>',
  slidesToShow: 2,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        dots: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    }
  ]
});


$('.home_slider').slick({
   centerMode: true,
   dots: true,
   arrows: false,
   autoplay:true,
  autoplaySpeed:5000,
  centerPadding: '40',
  prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"></button>',
  nextArrow: '<button class="slick-next" aria-label="Next" type="button"></button>',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1,
        dots: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1,
        dots: true
      }
    }
  ]
});


$('.rest_slider').slick({
   centerMode: true,
   dots: true,
   arrows: false,
   autoplay:true,
  autoplaySpeed:5000,
  centerPadding: '40',
  prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"></button>',
  nextArrow: '<button class="slick-next" aria-label="Next" type="button"></button>',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1,
        dots: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1,
        dots: true
      }
    }
  ]
});

$('.gallery_slider').slick({
  centerPadding: '40',
  prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"></button>',
  nextArrow: '<button class="slick-next" aria-label="Next" type="button"></button>',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    }
  ]
});

$('.work_slider').slick({
  centerPadding: '0px',
  prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"></button>',
  nextArrow: '<button class="slick-next" aria-label="Next" type="button"></button>',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    }
  ]
});


$('.gallery').slick({
  centerPadding: '40',
  dots: false,
  fade: true,
   arrows: true,
   autoplay:true,
  autoplaySpeed:5000,
  prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"></button>',
  nextArrow: '<button class="slick-next" aria-label="Next" type="button"></button>',
  slidesToShow: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        dots: false,
   arrows: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        dots: false,
   arrows: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    }
  ]
});


 $('.slider-for').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true
      });
      //set active class to first slide
$('.slider-nav .slick-slide').eq(0).addClass('slick-active');
      $('.slider-nav').slick({
          slidesToShow: 4,
        slidesToScroll:1,
          asNavFor: '.slider-for',
          dots: false,
          focusOnSelect: true,
          responsive: [{
                  breakpoint: 992,
                  settings: {
                      vertical: false,
                  }
              },
              {
                  breakpoint: 768,
                  settings: {
                      vertical: false,
                  }
              },
              {
                  breakpoint: 580,
                  settings: {
                      vertical: false,
                      slidesToShow: 3,
                  }
              },
              {
                  breakpoint: 380,
                  settings: {
                      vertical: false,
                      slidesToShow: 3,
                  }
              }
          ]
      });
      $('.slider-nav').on('mouseover', '.slick-slide', function (e) {
        var $currTarget = $(e.currentTarget), 
        index = $currTarget.data('slick-index'),
        slickObj = $('.slider-for').slick('getSlick');
      slickObj.slickGoTo(index);
  
    
});


}); 