var $navbar = $(".navbar-header");
    
AdjustHeader(); // Incase the user loads the page from halfway down (or something);
$(window).scroll(function() {
    AdjustHeader();
});

function AdjustHeader(){
  if ($(window).scrollTop() > 730) {
    if (!$navbar.hasClass("navbar-fixed-top fade-in")) {
      $navbar.addClass("navbar-fixed-top fade-in");
    }
  } else {
    $navbar.removeClass("navbar-fixed-top fade-in");
  }
}

// media query event handler
if (matchMedia) {
  const mq = window.matchMedia("(max-width: 991px)");
  mq.addListener(WidthChange);
  WidthChange(mq);
  }
  
  // media query change
  function WidthChange(mq) {
  if (mq.matches) {
    if ($(window).scrollTop() > 0) {
      if (!$navbar.hasClass("navbar-fixed-top fade-in")) {
        $navbar.addClass("navbar-fixed-top fade-in");
      }
    } else {
      $navbar.removeClass("navbar-fixed-top fade-in");
    }
      // window width is at least 500px
  } else {
  // window width is less than 500px
  }
  
  }
  