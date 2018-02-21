/* menu*/
$(function () {
    $(".menu-item").click(function() {
        $(this).find('img').toggleClass('rotate');
        $(this).children("ul").toggle();
    });
});

/*preloader*/
$(function () {
    setTimeout(function () {
        if(!$('.preloader').hasClass('done')){
            $('.preloader').addClass('done');
        }
    }, 2000)
})
/* hamburger*/
$(function () {
    $('.icon').click(function () {
        $('.icon').toggleClass('active');
        $('.menu-small').slideToggle(300);
    });
});
/*slider*/
$(function () {
    $('.sl').slick({
        autoplay: false,
        vertical:true,
        dots: true,
        arrows: false,
        pauseOnDotsHover: true
    });
    $('.sl-sm').slick({
        autoplay: false,
        vertical:true,
        dots: true,
        arrows: false,
        pauseOnDotsHover: true,
        responsive: [
             {
                breakpoint: 480,
                 settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    });
});
/* placeholder*/
$(document).ready(function () {
    $('input, textarea').each(function () {
        var placeholder = $(this).attr('placeholder');
        $(this).focus(function () {
            $(this).attr('placeholder', '');
        });
        $(this).focusout(function () {
            $(this).attr('placeholder', placeholder);
        });
    });
});

/*data*/
$(function () {
    $("#datepicker").datepicker({
        showOn: "button",
        buttonImage: "img/calendar.png",
        buttonImageOnly: true,
        buttonText: "Select date"
    });
});

/* phone mask*/
$(function () {
    $("#phone").mask("8(999) 999-9999");
});

/*button to appear*/
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.scrolltop:hidden').stop(true, true).fadeIn();
    } else {
        $('.scrolltop').stop(true, true).fadeOut();
    }
});
$(function () {
    $(".scroll").click(function () {
        $("html,body").animate({scrollTop: $(".main").offset().top}, "1000");
        return false
    })
});

