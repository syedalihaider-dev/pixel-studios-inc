    // sticky header
$(window).scroll(function() {    
var scroll = $(window).scrollTop();
//>=, not <=
if (scroll >= 300) {
//clearHeader, not clearheader - caps H
$("header").addClass("stickyheader");
} else {
$("header").removeClass("stickyheader");  
}
});
// sticky header end

$(function() {
        var myLazyLoad = new LazyLoad({
   elements_selector: ".lazy"
   // load_delay: 300 //adjust according to use case
});
    });


////// services-slider
    $(".slider-one").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        infinite:true,
        autoplaySpeed: 0,
        speed: 8000,
        pauseOnHover: false,
        cssEase: 'linear',
        centerMode: true,
        centerPadding: '100px',
        arrows: false,
        buttons: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
    });
////// services-slider end
////// services-slider
    $(".slider-two").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        infinite:true,
        speed: 8000,
        pauseOnHover: false,
        cssEase: 'linear',
        centerMode: true,
        centerPadding: '100px',
        arrows: false,
        buttons: false,
        rtl: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
    });
////// services-slider end
////// fancybox
$('[data-fancybox="swf-file"]').fancybox({
  iframe : {
    css : {
      width : '336px',
      height : '280px'
    }
  }
});

$('[data-fancybox="video-file"]').fancybox({
  iframe : {
    css : {
      width : '580px',
      height : '340px'
    }
  }
});   
$('[data-fancybox="images"]').fancybox({
  margin : [44,0,22,0],
  thumbs : {
    autoStart : true,
    axis      : 'y'
  }
})
////// fancybox end


 // Tabbing 
    //*****************************

    $('[data-targetit]').on('click', function() {
        $(this).siblings().removeClass('current');
        $(this).addClass('current');
        var target = $(this).data('targetit');
        $('.' + target).siblings('[class*="my-tabs"]').removeClass('current');
        $('.' + target).addClass('current');
        $('.slider-one').slick('setPosition');
        // $('.slider-one').slick('refresh');
        $('.slider-two').slick('setPosition');        
        // $('.slider-two').slick('refresh');


    });




$(function () {
  var $anchors = $('.proces-box-wrap');

  (function _loop(idx) {
    $anchors.removeClass('active').eq(idx).addClass('active');
    setTimeout(function () {
      _loop((idx + 1) % $anchors.length);
    }, 5000);
  }(0));
});



////// tabs custom (place nav and tabs anywhere separately)
$('.tabs-custom-nav a').click(function(event){
$(this).closest('li').siblings('li').children('a').removeClass('current');
$(this).addClass('current');
$(this.hash).closest('.general').children('div.tab-content-panel:not(:hidden)').hide();
$(this.hash).show();
event.preventDefault();
$('.sliderxs').slick('setPosition');
});
////// tabs custom end

$( document ).ready(function() {


// intel Tel Input
let ip; 
let ip_value;
 $("#phone-country,#phone-coun").intlTelInput({
     
      //allowDropdown: false,
      // autoHideDialCode: false,
      // autoPlaceholder: "off",
      // dropdownContainer: "body",
      // excludeCountries: ["us"],
      // formatOnDisplay: false,
    geoIpLookup: function(callback) {
            $.get('https://ipinfo.io', function() {}, "jsonp").always(function(resp) {
              var countryCode = (resp && resp.country) ? resp.country : "";
              callback(countryCode);
              ip=resp.ip;
            
              
            });
          },
       initialCountry: "auto",
       nationalMode: true,
       separateDialCode: true,
      // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
      // placeholderNumberType: "MOBILE",
      // preferredCountries: ['cn', 'jp'],
     // utilsScript: "<?php echo $basesurl;?>js/utils.js"
    });

setTimeout(function(){
    $('input[name="cip"]').val(ip);
    $('input[name="pc"]').val($('.selected-dial-code').text());
    $('input[name="ctry"]').val( $('.country-list .country.active .country-name').text());
}, 3000);


$('body').delegate('.country','click',function(){
$('input[name="pc"]').val($(this).find('.dial-code').text());

$('input[name="ctry"]').val($(this).closest("form").find('.country-list .country.active .country-name').text());

/*var oldString2=$('.selected-flag').attr('title').toUpperCase();
  var newString12 = oldString2.split(':',1)[0];
               $('input[name="ctry"]').val(newString12);*/
 });



$('body').delegate('.country','click',function(){
$('input[name="pc"]').val($(this).find('.dial-code').text());

var oldString2=$('.selected-flag').attr('title').toUpperCase();
  var newString12 = oldString2.split(':',1)[0];
               $('input[name="ctry"]').val(newString12);
 });
 
});


window.addEventListener('load', (
    function () {
        document.getElementById('copyright-year').appendChild(
            document.createTextNode(
                new Date().getFullYear()
            )
        );
    }
));


VanillaTilt.init(document.querySelectorAll(".home-ser-tab .my-tabs figure img"),{
  max: 30,
  speed: 600,
  scale: 1,
  transition: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
  perspective: 600,
  glare: true
});

////// mobile slider
    $(".mob-sliderxs").slick({
        arrows: false,
        dots: false,
        autoplay: true,
    adaptiveHeight: true,
        responsive: [
            {
              breakpoint: 10000,
              settings: "unslick"
            },
            {
              breakpoint: 767,
              settings: {
                unslick: true
              }
            }
        ]
    });
////// mob slider end
