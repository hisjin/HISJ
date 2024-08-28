$(function(){
    // alert ('hi')
 
    let andc = false;
    $(window).scroll(function() {  
        $('.h-inner').addClass('hi')
        //만약에 스크롤탑이 0이면 removeclass (hi)
        if ($(window).scrollTop()==0) {
            $('.h-inner').removeClass('hi');
        }
        
        if ($(window).scrollTop() >= 7200) {
            $('header .container > .logo').addClass('on').removeClass('and');
            andc = false; 
        } else {
            if (!andc) {
                $('header .container > .logo').addClass('and').removeClass('on');
                andc = true; 
                setTimeout(function() {
                    $('header .container > .logo').removeClass('and');
                }, 500);
            }
        }

    
        
    });

    $('header ul li').click(function(){
        $(this).addClass('ha').siblings().removeClass('ha')

        let idx = $(this).index()

        let section = $('main .mainbg > section').eq(idx)
        // console.log(section)-작업관리자확인용

        let distance = section.offset().top + (100)

        $('html, body').animate({
            scrollTop : distance
        })
    })

    $('.hamburger').click(function(){
            $('.h-inner').toggleClass('hi')

    })

    
})
