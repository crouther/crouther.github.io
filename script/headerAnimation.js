/** headerAnimation File ::
* All content of this file is in regards to the animation of the header
* all motion features such as expansion and collapsion is included here
* or is mentioned in headerIMG.js and menu.js **/

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();


//jQuery on scroll event listener
$(window).scroll(function(event){
    didScroll = true;
});

//Runs hasScrolled function if page has moved
setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);


/** hasScrolled:
An event driven function for toggling the expansion and shrinkion of 
the main menu bar */

function hasScrolled() {
    var st = $(this).scrollTop();

    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
        document.getElementById('imgHolder').classList.toggle('rotated');
        //document.body.style.paddingTop = '50px';
        shrink("logo");


    } else {
        if (st == 0) {
            $('header').removeClass('nav-up').addClass('nav-down');
            document.getElementById('imgHolder').classList.toggle('rotated');
            //document.body.style.paddingTop = '250px';
            expand("logo");

        }
        /*// Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }*/
    }
    
    lastScrollTop = st;
}