// JavaScript Document
jQuery('#product-carousel').owlCarousel({

    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        576:{
            items:2
        },
        992:{
            items:4
        }
    }
});

/*Galil-47-inner-page-Supriyo-start*/
jQuery('#galil-gallery-carousel').owlCarousel({
loop:true,
margin:10,
nav:false,
responsive:{
    0:{
        items:1
    },
    576:{
        items:2
    },
    768:{
        items:3
    },
    992:{
        items:3
    }
}
});
/*Galil-47-inner-page-Supriyo-end*/

jQuery(document).ready(function() {
jQuery('.count-number').each(function () {
    jQuery(this).prop('Counter',0).animate({
        Counter: jQuery(this).text()
    }, {
        
        //chnage count up speed here
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            jQuery(this).text(Math.ceil(now));
        }
    });
});
});
