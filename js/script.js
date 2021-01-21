$(document).ready(function(){
    $('.navbar-toggler').click(function(){
        $('.navbar-toggler').toggleClass('active')
    })
    //-----

    $('.nav-item ').click(function(){
        $(this).addClass('active').siblings().removeClass('active')
    })
        //-----

    $('.nav-item .nav-link').click(function(){
        
        $('html,body').animate({
            'scrollTop':$($(this).attr('href').offset()).Top
        },1000)
    })
  
   
    $('.ggg').click(function(){
        $('body').attr('class','gray')
        $(this).hide()
        $('.moon').show();
        
    })
    $('.moon').click(function(){
        $('body').attr('class','whit')
        $(this).hide()
        $('.ggg').show();
        
    })

    $(window).scroll(function(){
        var fix = $(window).scrollTop()
        if(fix > 100){
            $('.navbar').addClass('fixed').css('padding','17px').slideDown(500)
        }
        else{
         $('.navbar').removeClass('fixed')
 
        }   
         // Top scroll
       if(fix >500){
        $('.top').show(1000);
        }
        else{
        $('.top').hide(1000);

        }    
    })


      // view the viedeo in class choose
    $('.pop').magnificPopup({
        type: 'iframe'    
    });

    //-----------------------------

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
       
       // dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }
    })
    //---top
    $('.top').click(function(){
        $('html,body').animate({'scrollTop':0},3000)
           
    })

    //--------------------------

});

    ///------ outer slider in class middle
    (function autoSlider(){
        $('.slider .active').each(function(){
            if(!$(this).is(':last-child')){
                $(this).delay(3000).fadeOut(1000,function(){
                    $(this).removeClass('active').next().addClass('active').fadeIn(1000);
                    autoSlider()
                })

            }
            else{
                $(this).delay(3000).fadeOut(1000,function(){
                    $(this).removeClass('active');
                    $('.slider div').eq(0).addClass('active').fadeIn(1000);
                    autoSlider()
                })

            }
        })

    }());


    ///---------------------------

  

