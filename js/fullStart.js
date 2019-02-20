$(document).ready(function() {
    $('#fullpage').fullpage({
        sectionsColor:['','#F2EFEA','#F2EFEA','','',
        '#F2EFEA','#2C2C32'],
        anchors: ['firstPage', 'secondPage', '3thPage','4thPage','5thPage','6thPage'],
        menu: '#menu',
        slidesNavigation: true,
        parallax: true,
        scrollingSpeed: 1000,
        autoScrolling: true,
        fitToSection:false,
        scrollOverflow:true,
        scrollOverflowReset: true,

        afterLoad: function(anchor, index){
            var activeItem;

            if(index == 1 || index == 2 || index == 3){
                activeItem = $('#menu').find('a').first()
            }else{
                activeItem = $('#menu').find('a').last()
            }

            activeItem
                .addClass('active')
                .siblings().removeClass('active');
        }

    });




});