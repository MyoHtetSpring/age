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
    // function fadeAnime() {
    //   $(".flipLeftTopTrigger").each(function () {
    //     //flipLeftTopTriggerというクラス名が
    //     var elemPos = $(this).offset().top - 50; //要素より、50px上の
    //     var scroll = $(window).scrollTop();
    //     var windowHeight = $(window).height();
    //     if (scroll >= elemPos - windowHeight) {
    //       $(this).addClass("flipLeftTop"); // 画面内に入ったらflipLeftTopというクラス名を追記
    //     } else {
    //       $(this).removeClass("flipLeftTop"); // 画面外に出たらflipLeftTopというクラス名を外す
    //     }
    //   });
    // }

    // $(window).scroll(function () {
    //   fadeAnime(); //call function fadeAnime
    // });
    $(".fadeUpTrigger").each(function () {
      //fadeUpTriggerというクラス名が
      var elemPos = $(this).offset().top - 50; //要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight) {
        $(this).addClass("fadeUp"); // 画面内に入ったらfadeUpというクラス名を追記
      } else {
        $(this).removeClass("fadeUp"); // 画面外に出たらfadeUpというクラス名を外す
      }
    });
    $(function() {
      $('.new-list li').matchHeight();
    });

  });
  


