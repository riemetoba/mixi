// Mixitup start
var mixer = mixitup(".mifffe");
// Mixitup end

// Back to top start
//==== Back-to-top button
$(window).on("scroll", function (event) {
  if ($(this).scrollTop() > 600) {
    $("#batotop").fadeIn(200);
  } else {
    $("#batotop").fadeOut(200);
  }
});
//==== Animate the scroll to top
$("#batotop").on("click", function (event) {
  event.preventDefault();

  $("html, body").animate(
    {
      scrollTop: 0,
    },
    1000
  );
});
// Back to top end

// Slickslider start
$(".preSlider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  prevArrow: '<i class="fa-solid fa-caret-left prev"></i>',
  nextArrow: '<i class="fa-solid fa-caret-right next"></i>',
  dots: true,
});
// Slickslider end

// AOS start
AOS.init();
// AOS end
