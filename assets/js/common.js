jQuery(function($) {
    $(function() {
      var scroll_func = function() {
        $('html,body').animate({ scrollTop: $($(this).attr("href")).offset().top }, 'slow', 'swing');
        return false;
      }
      $(function() {
        $('a[href^="#"]').not('[href$="#"]').click(scroll_func);
      });
    });
    $(function(){
      $(document).on('click', '.sp-menu-toggle', function(){
          $(this).toggleClass("menu-on");
          $(this).find(".subnav-box").slideToggle();
        });
    });
    $(function(){
      $(".setting-ico > a").click(function() {
        $('.setting-ico').toggleClass('setico-on');
        // $('.setting-box').addClass('setting-on');
        $('.setting-box').slideToggle();
      });
    });
    $(function(){
      var winWidth = $(window).width();
        if (winWidth < 768) {
          $(document).on('click', '.setting-ico', function(){
            if ($('.gmenu').hasClass('is-active')) {
              $('.gmenu').removeClass('is-active');
              $('.nav-box').removeClass('nav-open');
            }
            if ($('.h-utility').hasClass('spnavClick')) {
              $('.h-utility').removeClass('spnavClick');
            }
            $('.h-utility').toggleClass('spmenuClick');
          });
        }
    });
    $(document).on('click', '.gmenu', function(){
      if ($('.setting-ico').hasClass('setico-on')) {
        $('.setting-ico').toggleClass('setico-on');
        $('.setting-box').removeClass('setting-on');
        $('.setting-box').slideToggle();
      }
      $('.gmenu').addClass('is-active');
      $('.nav-box').addClass('nav-open');
      $('.h-utility').addClass('spnavClick');
    });
    $(document).on('click', '.is-active', function(){
        $('.gmenu').removeClass('is-active');
        $('.nav-box').removeClass('nav-open');
        $('.h-utility').removeClass('spnavClick');
    });


   
    function PageTopAnime() {
      var scroll = $(window).scrollTop();
      if (scroll >= 100){
        $('#page-top').removeClass('DownMove');
        $('#page-top').addClass('UpMove');
      }else{
        if($('#page-top').hasClass('UpMove')){
          $('#page-top').removeClass('UpMove');
          $('#page-top').addClass('DownMove');
        }
      }
    }


    $(window).scroll(function () {
      PageTopAnime();
    });


    $(window).on('load', function () {
      PageTopAnime();
    });

    $('#page-top').click(function () {
      var scroll = $(window).scrollTop();
      if(scroll > 0){
        $(this).addClass('floatAnime');
            $('body,html').animate({
                scrollTop: 0
            }, 2000,function(){
                $('#page-top').removeClass('floatAnime');
            });	
      }
        return false;
    });
    //fade trigger top
    function fadeAnime() {
      $(".flipLeftTopTrigger").each(function () {
        //flipLeftTopTrigger????????????????????????
        var elemPos = $(this).offset().top - 50; //???????????????50px??????
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
          $(this).addClass("flipLeftTop"); // ????????????????????????flipLeftTop??????????????????????????????
        } else {
          $(this).removeClass("flipLeftTop"); // ?????????????????????flipLeftTop??????????????????????????????
        }
      });
    }
    function fadeAnime(){
    $(".fadeUpTrigger").each(function () {
      //fadeUpTrigger????????????????????????
      var elemPos = $(this).offset().top - 50; //???????????????50px??????
    
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight) {
        $(this).addClass("fadeUp"); // ????????????????????????fadeUp??????????????????????????????
      } else {
        $(this).removeClass("fadeUp"); // ?????????????????????fadeUp??????????????????????????????
      }
    });
  }

    $(window).scroll(function () {
      fadeAnime(); //call function fadeAnime
    });
    $(function() {
      $('.new-list li').matchHeight();
    });

    //back to top jquery

    // ===== Scroll to Top ==== 
$(window).scroll(function() {
  if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
      $('#return-to-top').fadeIn(200);    // Fade in the arrow
  } else {
      $('#return-to-top').fadeOut(200);   // Else fade out the arrow
  }
});
$('#return-to-top').click(function() {      // When arrow is clicked
  $('body,html').animate({
      scrollTop : 0                       // Scroll to top of body
  }, 500);
});

  });
  


