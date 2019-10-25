

$("#Mobile_menu div button").each(function() {
    $(this).on("click", function(){
        var filtertag = $(this).attr('class');
        $('.product').show();

        $('.product:not(.' + filtertag + ')').hide();

        // add class to the one we clicked
    });
 

});
$("button.smartphone").click(function(e) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $('#category_product').offset().top
    }, 0);
});
$("button.tv").click(function(e) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $('#category_product').offset().top
    }, 0);
});
$("button.electrohogar").click(function(e) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $('#category_product').offset().top
    }, 0);
});
$("button.refrigeradoras").click(function(e) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $('#category_product').offset().top
    }, 0);
});
$("button.microondas").click(function(e) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $('#category_product').offset().top
    }, 0);
});
  
/**/ 


/**
 * 
 * Este la Categoría principal que se mostrara.
*/
document.querySelector(".tv").click();
/**
 * 
 */

 /*Aqui se tomala ruta para hacer efecto de las categorías con los parámetros de la URL*/
var url_string = window.location.href; //window.location.href
var url = new URL(url_string);
var c = url.searchParams.get("cat");  
console.log(c);    
if (c == 'smartphones') {
    function animate(elem, style, unit, from, to, time, prop) {
        if (!elem) {
            return;
        }
        var start = new Date().getTime(),
            timer = setInterval(function () {
                var step = Math.min(1, (new Date().getTime() - start) / time);
                if (prop) {
                    elem[style] = (from + step * (to - from))+unit;
                } else {
                    elem.style[style] = (from + step * (to - from))+unit;
                }
                if (step === 1) {
                    clearInterval(timer);
                }
            }, 1);
        if (prop) {
              elem[style] = from+unit;
        } else {
              elem.style[style] = from+unit;
        }
    }
    
    window.onload = function () {
        var target = document.getElementById("Mobile_menu");
        animate(document.scrollingElement || document.documentElement, "scrollTop", "", 0, target.offsetTop, 100, true);
    };
    document.querySelector(".smartphone").click();

    }   
    else if (c == 'tv') {
       function animate(elem, style, unit, from, to, time, prop) {
            if (!elem) {
                return;
            }
            var start = new Date().getTime(),
                timer = setInterval(function () {
                    var step = Math.min(1, (new Date().getTime() - start) / time);
                    if (prop) {
                        elem[style] = (from + step * (to - from))+unit;
                    } else {
                        elem.style[style] = (from + step * (to - from))+unit;
                    }
                    if (step === 1) {
                        clearInterval(timer);
                    }
                }, 1);
            if (prop) {
                  elem[style] = from+unit;
            } else {
                  elem.style[style] = from+unit;
            }
        }
        
        window.onload = function () {
            var target = document.getElementById("Mobile_menu");
            animate(document.scrollingElement || document.documentElement, "scrollTop", "", 0, target.offsetTop, 100, true);
        };
    document.querySelector(".tv").click();
  

    }   
    else if (c== 'electrohogar' ){
        function animate(elem, style, unit, from, to, time, prop) {
            if (!elem) {
                return;
            }
            var start = new Date().getTime(),
                timer = setInterval(function () {
                    var step = Math.min(1, (new Date().getTime() - start) / time);
                    if (prop) {
                        elem[style] = (from + step * (to - from))+unit;
                    } else {
                        elem.style[style] = (from + step * (to - from))+unit;
                    }
                    if (step === 1) {
                        clearInterval(timer);
                    }
                }, 1);
            if (prop) {
                  elem[style] = from+unit;
            } else {
                  elem.style[style] = from+unit;
            }
        }
        
        window.onload = function () {
            var target = document.getElementById("Mobile_menu");
            animate(document.scrollingElement || document.documentElement, "scrollTop", "", 0, target.offsetTop, 100, true);
        };
    document.querySelector(".electrohogar").click();
    }
    else if (c== 'refrigeradoras' ){
        function animate(elem, style, unit, from, to, time, prop) {
            if (!elem) {
                return;
            }
            var start = new Date().getTime(),
                timer = setInterval(function () {
                    var step = Math.min(1, (new Date().getTime() - start) / time);
                    if (prop) {
                        elem[style] = (from + step * (to - from))+unit;
                    } else {
                        elem.style[style] = (from + step * (to - from))+unit;
                    }
                    if (step === 1) {
                        clearInterval(timer);
                    }
                }, 1);
            if (prop) {
                  elem[style] = from+unit;

            } else {
                  elem.style[style] = from+unit;
            }

        }
        
        window.onload = function () {
            var target = document.getElementById("Mobile_menu");
            animate(document.scrollingElement || document.documentElement, "scrollTop", "", 0, target.offsetTop, 100, true);

        };
     
        document.querySelector(".refrigeradoras").click();

    }
    else if (c== 'microondas' ){
        function animate(elem, style, unit, from, to, time, prop) {
            if (!elem) {
                return;
            }
            var start = new Date().getTime(),
                timer = setInterval(function () {
                    var step = Math.min(1, (new Date().getTime() - start) / time);
                    if (prop) {
                        elem[style] = (from + step * (to - from))+unit;
                    } else {
                        elem.style[style] = (from + step * (to - from))+unit;
                    }
                    if (step === 1) {
                        clearInterval(timer);
                    }
                }, 1);
            if (prop) {
                  elem[style] = from+unit;

            } else {
                  elem.style[style] = from+unit;
            }

        }
        
        window.onload = function () {
            var target = document.getElementById("Mobile_menu");
            animate(document.scrollingElement || document.documentElement, "scrollTop", "", 0, target.offsetTop, 100, true);

        };
     
        document.querySelector(".microondas").click();

    }  else if (c== 'lavadoras' ){
        function animate(elem, style, unit, from, to, time, prop) {
            if (!elem) {
                return;
            }
            var start = new Date().getTime(),
                timer = setInterval(function () {
                    var step = Math.min(1, (new Date().getTime() - start) / time);
                    if (prop) {
                        elem[style] = (from + step * (to - from))+unit;
                    } else {
                        elem.style[style] = (from + step * (to - from))+unit;
                    }
                    if (step === 1) {
                        clearInterval(timer);
                    }
                }, 1);
            if (prop) {
                  elem[style] = from+unit;

            } else {
                  elem.style[style] = from+unit;
            }

        }
        
        window.onload = function () {
            var target = document.getElementById("Mobile_menu");
            animate(document.scrollingElement || document.documentElement, "scrollTop", "", 0, target.offsetTop, 100, true);

        };
     
        document.querySelector(".lavadoras").click();

    }