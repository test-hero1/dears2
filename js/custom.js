jQuery.noConflict();

jQuery(document).ready(function(){

    "use strict";


    // countdow for product event
    if( jQuery('.tzCountdown').length > 0 ){
        var austDay = new Date();
        austDay = new Date(2015, 8 - 1, 26);
        jQuery('#defaultCountdown').countdown({until: austDay});
    }


    // search
    jQuery('.tz-button-search').click(function(){
       jQuery('.tz-form-search').toggleClass('input-width');
    });







    // Slider post


    // Slider post


    // Slider post



});



jQuery(window).bind('load resize',function(){

    "use strict";
    /* Method for parallax */
    jQuery('.parallax').each(function () {
        jQuery(this).parallax("30%", 0.1);
    });


});