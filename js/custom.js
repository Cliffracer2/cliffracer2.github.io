// ISOTOPE FILTER
// 이 필터를 쓴 이유: 포트폴리오 카테고리 선택시 분류해서 보여주기가 좋아보였기 때문.
// jQuery(document).ready(function($){

//     if ( $('.isotope-box-wrapper').length > 0 ) { 
  
//         let $container  = $('.isotope-box-wrapper');
//         let $imgs       = $('.isotope-box img');
  
//         $container.imagesLoaded(function () {
  
//           $container.isotope({
//           layoutMode: 'fitRows',
//           itemSelector: '.isotope-box'
//           });
  
//           $imgs.on('load', function(){
//             $container.isotope('reLayout');
//           });
  
//         });
  
//         //filter items on button click
  
//         $('.filter-wrapper li a').click(function(){
  
//             let $this = $(this), filterValue = $this.attr('data-filter');
  
//         $container.isotope({ 
//           filter: filterValue,
//           animationOptions: { 
//               duration: 750, 
//               easing: 'linear', 
//               queue: false, 
//           }                
//         });             
  
//         // don't proceed if already selected 
  
//         if ( $this.hasClass('selected') ) { 
//           return false; 
//         }
  
//         var filter_wrapper = $this.closest('.filter-wrapper');
//         filter_wrapper.find('.selected').removeClass('selected');
//         $this.addClass('selected');
  
//           return false;
//         }); 
  
//     }
  
// });

// init Isotope
var iso = new Isotope( '.isotope-box-wrap', {
  itemSelector: '.isotope-box',
  layoutMode: 'fitRows'
});

// // filter functions
// var filterFns = {
//   // show if number is greater than 50
//   numberGreaterThan50: function( itemElem ) {
//       var number = itemElem.querySelector('.number').textContent;
//       return parseInt( number, 10 ) > 50;
//   },
//   // show if name ends with -ium
//   ium: function( itemElem ) {
//       var name = itemElem.querySelector('.name').textContent;
//       return name.match( /ium$/ );
//   }
// };

// bind filter button click
// var filtersElem = document.querySelector('.filters-button-group');
// filtersElem.addEventListener( 'click', function( event ) {
//   // only work with buttons
//   if ( !matchesSelector( event.target, 'button' ) ) {
//       return;
//   }
//   var filterValue = event.target.getAttribute('data-filter');
//   // use matching filter function
//   //filterValue = filterFns[ filterValue ] || filterValue;
//   iso.arrange({ filter: filterValue });
// });

// change is-checked class on buttons
var buttonGroups = document.querySelectorAll('.button-group');
for ( var i=0, len = buttonGroups.length; i < len; i++ ) {
  var buttonGroup = buttonGroups[i];
  radioButtonGroup( buttonGroup );
}

function radioButtonGroup( buttonGroup ) {
buttonGroup.addEventListener( 'click', function( event ) {
      // only work with buttons
      if ( !matchesSelector( event.target, 'button' ) ) {
          return;
      }
      buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
      event.target.classList.add('is-checked');
  });
}
// isotope filter end

// load changed jquery 3.0
// PRELOADER JS
$(window).on('load', function(){
  $('.preloader').fadeOut(1000); // set duration in brackets
  $(".navbar-fixed-top").addClass("top-nav-collapse");
});

// // jQuery to collapse the navbar on scroll //
// $(window).scroll(function() {
//     // if ($(".navbar").offset().top > 50) {
//     //     $(".navbar-fixed-top").addClass("top-nav-collapse");
//     // } else {
//     //     $(".navbar-fixed-top").removeClass("top-nav-collapse");
//     // }
//     $(".navbar-fixed-top").addClass("top-nav-collapse");
// });


// ------- WOW ANIMATED ------ //
let wow = new WOW(
  {
    mobile: false
  });
wow.init();

/* HTML document is loaded. DOM is ready. 
-------------------------------------------*/
$(function(){

  // HIDE MOBILE MENU AFTER CLIKING ON A LINK
  $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

  // HOME BACKGROUND SLIDESHOW
  $(function(){
    jQuery(document).ready(function() {
      $('#home').backstretch([
        "img/home-bg-slideshow1.jpg", 
        "img/home-bg-slideshow2.jpg",
        "img/home-bg-slideshow3.jpg",
          ],  {duration: 2000, fade: 750});
    });
  })

});

// youtube link under image
jQuery('a.introVid').click(function(){
  autoPlayVideo('VIDEO_ID_HERE','800','600');
});

/*--------------------------------
  Swap video with autoplay video
---------------------------------*/

function autoPlayVideo(vcode, width, height){
  "use strict";
  $("#videoContainer").html('<iframe width="1600" height="1000" src="https://www.youtube.com/embed/LweHdMYju28" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; yt:cc=on; picture-in-picture" allowfullscreen></iframe>');
}
