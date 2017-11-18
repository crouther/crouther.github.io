/** forceAnimate ::
* An onclick event for expanding and shrinking the header & header image **/

function forceAnimate(){

    if($('header').hasClass('nav-up')){
        $('header').removeClass('nav-up').addClass('nav-down');
        document.getElementById('imgHolder').classList.toggle('rotated');
        expand("logo");
    }

    else{
        $('header').removeClass('nav-down').addClass('nav-up');
        document.getElementById('imgHolder').classList.toggle('rotated');
        shrink("logo");
    }
    
}