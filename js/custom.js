$(document).ready(function(){    
    $('#img-desktop').hover(function(){
        if($(this).hasClass('expanded')){
            $(this)
                .removeClass('expanded')
                .stop()
                .animate({
                    height: '510px',
                    left: '0px',
                    bottom: '0px',
                }, 100);
            $(this).fadeTo(0, 0.5);
            $('.mobile-container').fadeTo(0, 1).css('zIndex', '100');
        }
        else{
            $(this)
                .addClass('expanded')
                .stop()
                .animate({
                    height: '550px',
                    left: '15px',
                    bottom: '15px',
                         }, 100);
            $(this).fadeTo(0, 1.0);
            $('.mobile-container').fadeTo(0, .5).css('zIndex', '-100');
        }
    });
    
    $('#img-mobile').hover(function(){
        if($(this).hasClass('expanded')){
            $(this)
                .removeClass('expanded')
                .stop()
                .animate({
                    height: '510px',
                    right: '0px',
                    bottom: '0px',
                }, 100);
            $(this).fadeTo(0, 0.5);
            $('.desktop-container').fadeTo(0, 1).css('zIndex', '100');
        }
        else{
            $(this)
                .addClass('expanded')
                .stop()
                .animate({
                    height: '550px',
                    right: '15px',
                    bottom: '15px',
                         }, 100);
            $(this).fadeTo(0, 1.0);
            $('.desktop-container').fadeTo(0, .5).css('zIndex', '-100');
        }
    });
     
    $('#banner').mouseleave(function(){
        $('#img-mobile, #img-desktop').fadeTo(0, 1.0);
    });
});