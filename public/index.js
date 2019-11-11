$(function(){
 
    
$(".footer a").bind("mouseenter",function(e){
  let cx = e.pageX;
  let cy = e.clientY;
  $(".styling").css({
    opacity:1,
    left:e.pageX+170 
  })
})
$(".footer a").mouseleave(function(){
  $(".styling").css({
    opacity:0
  })
})
$(document).ready(function(){
  $(".RentCar .owl-carousel").owlCarousel({
    loop:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1.1,
            nav:false,
            loop:true,

        },
        600:{
            items:2,
            nav:false,
            loop:true,

        },
        1000:{
            items:3,
            nav:false,
            loop:true,

        }
    },
    margin:10
  });
});

$(document).ready(function(){
  $(".slider .owl-carousel").owlCarousel({
    loop:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            loop:true,

        },
        600:{
            items:1,
            loop:true,

        },
        1000:{
            items:1,
            loop:true,

        }
    },
    margin:15,
    dots:true
  });
});
})
