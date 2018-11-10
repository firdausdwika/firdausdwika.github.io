(function( $ ){
   $.fn.loading = function() {
      $(".slide-content").attr('style','-webkit-animation-name: slideshow;-webkit-animation-duration: 1s;animation-iteration-count: 2;animation-direction:alternate;');
      return this;
   }; 
})( jQuery );

(function( $ ){
   $.fn.removing = function() {
      $(".sidebar-menu").fadeOut('slow');
      $(".bottombar-menu").fadeOut('slow');
      $('.row').addClass('main-content').fadeOut('slow');
      $('#content').addClass('main-content').fadeOut('slow');
      return this;
   }; 
})( jQuery );

(function( $ ){
   $.fn.showing = function() {
      $(".sidebar-menu").fadeIn('slow');
      $(".bottombar-menu").fadeIn('slow');
      $('.row').removeClass('main-content').fadeIn('slow');
      $('#content').removeClass('main-content').fadeIn('slow');
      $(".slide-content").removeAttr('style','-webkit-animation-name: slideshow;-webkit-animation-duration: 1s;animation-iteration-count: 2;animation-direction:alternate;');
      return this;
   }; 
})( jQuery );

setTimeout(function(){
  $('body').loading();
},200);

setTimeout(function(){
  $('body').showing();
},1800);

$(function () {
      var load = function (url) {
        $.get(url).done(function (data) {   
          $("#content").html(data);
        })
      };
      
      $(document).on('click', 'div p a', function (e) {        
        e.preventDefault();
        //$(".slide-content").removeAttr('style','-webkit-animation-name: slideshow;-webkit-animation-duration: 1s;animation-iteration-count: 2;animation-direction:alternate;').delay(300);
        
        var $this = $(this),
          url = $this.attr("href"),
          title = $this.text();
        
        history.pushState({
          url: url,
          title: title
        }, title, url);

        document.title = title + ' - Firdaus Dwika';
        $(".slide-content").attr('style','-webkit-animation-name: slideshow;-webkit-animation-duration: 1s;animation-iteration-count: 2;animation-direction:alternate;');
        var $rows = $('.row').addClass('h-25');
        setTimeout(function() {
           $rows.removeClass("h-100");          
           $('body').removing();
       }, 100);
        setTimeout(function(){
          $('body').showing();
        },1500);
        load(url);
      });

      $(document).on('click', 'div span a', function (e) {      
        e.preventDefault();
        $("div span a").removeClass('active-menu');  
        //$(".slide-content").removeAttr('style','-webkit-animation-name: slideshow;-webkit-animation-duration: 1s;animation-iteration-count: 2;animation-direction:alternate;').delay(300);
        
        var $this = $(this),
          url = $this.attr("href"),
          title = $this.text();
        
        history.pushState({
          url: url,
          title: title
        }, title, url);
        var url_menu = url + '-text-sm';
        document.title = title + ' - Firdaus Dwika';
        $(".slide-content").attr('style','-webkit-animation-name: slideshow;-webkit-animation-duration: 1s;animation-iteration-count: 2;animation-direction:alternate;');
        var $rows = $('.row').addClass('h-25');
        $("."+url_menu+" a").addClass('active-menu');
        setTimeout(function() {
           $rows.removeClass("h-100");          
           $('body').removing();
       }, 100);
        setTimeout(function(){
          $('body').showing();
        },1500);
        load(url);
      });

      $(document).on('click', '.person-name', function (e) {
        e.preventDefault();
        
        var $this = $(this),
          url = window.location.origin+'/firdausdwika/',
          title = $this.text();
        
        history.pushState({
          url: window.location.origin+'/firdausdwika/',
          title: title
        }, title, window.location.origin+'/firdausdwika/');

        $("#content").empty();

        document.title = 'Firdaus Dwika';
        $(".slide-content").attr('style','-webkit-animation-name: slideshow;-webkit-animation-duration: 1s;animation-iteration-count: 2;animation-direction:alternate;');
        var $rows = $('.row').addClass('h-100');
        setTimeout(function() {
           $rows.removeClass("h-25");
           $('body').removing();
       }, 100);
        setTimeout(function(){
          $('body').showing();
        },1800);
        // load(url);
        $("#content").empty();
      });
      
      $(window).on('popstate', function (e) {
        var state = e.originalEvent.state;
        if (state !== null) {
          $(".slide-content").attr('style','-webkit-animation-name: slideshow;-webkit-animation-duration: 1s;animation-iteration-count: 2;animation-direction:alternate;');
          setTimeout(function() {
            document.title = state.title;
            load(state.url);
             $('body').removing();
         }, 100);
          setTimeout(function(){
          $('body').showing();
        },1800);
        } else {
          $(".slide-content").attr('style','-webkit-animation-name: slideshow;-webkit-animation-duration: 1s;animation-iteration-count: 2;animation-direction:alternate;');
          var $rows = $('.row').addClass('h-100');
          setTimeout(function() {
            document.title = 'Firdaus Dwika';
            $("#content").empty();
             $rows.removeClass("h-25");
             $('body').removing();
         }, 100);
          setTimeout(function(){
          $('body').showing();
        },1800);
        }
      });
    });

// $("body").mousemove(function (event) {
// 	tiltx = 1;
// 	tilty = 0;
// 	tiltxx = 0;
// 	tiltyy = 1;
// 	radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2));
// 	degree = (radius * 15);
// 	degreee = -(radius * 15);
// 	var rotX = degreee ? 2 * degreee / Math.ceil($(window).height()) * event.pageY - degreee : 0;
// 	var rotY = degree ? 2 * degree / Math.ceil($(window).width()) * event.pageX - degree : 0;	
// 	$("body").css('transform', 'rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + rotX + 'deg) rotate3d(' + tiltxx + ', ' + tiltyy + ', 0, ' + rotY + 'deg)')
// });

/* ---- particles.js config ---- */

particlesJS("particle-container", {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#000000"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 1,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

$(document).on('click', '#pos', function (e) { 
      // $('#pos').on('click',function(){
        if($('.pos-category').hasClass('isactive')){
          $('.pos-category').removeClass('isactive');
          $('.pos-list').fadeOut('slow');
          $('.compro-category').fadeIn('slow');
          $('.apps-category').fadeIn('slow');
        }else{
          $('.pos-category').addClass('isactive');
          $('.pos-list').fadeIn('slow'); 
          $('.compro-category').fadeOut('slow');
          $('.apps-category').fadeOut('slow'); 
        }
      });

      $(document).on('click', '#compro', function (e) {
        if($('.compro-category').hasClass('isactive')){
          $(".compro-category").attr('style','-webkit-animation: compro-inactive 2s 1 ease-in-out;-webkit-animation-fill-mode: forwards;');
          $(".compro-list").attr('style','-webkit-animation: compro-inactive 2s 1 ease-in-out;-webkit-animation-fill-mode: forwards;');
          $('.compro-category').removeClass('isactive');
          $('.compro-list').fadeOut('slow');
          $('.pos-category').fadeIn('slow');
          $('.apps-category').fadeIn('slow');
        }else{
          $('.compro-category').addClass('isactive');
          $(".compro-category").attr('style','-webkit-animation: compro-active 2s 1 ease-in-out;-webkit-animation-fill-mode: forwards;');
          $(".compro-list").attr('style','-webkit-animation: compro-active 2s 1 ease-in-out;-webkit-animation-fill-mode: forwards;');
          $('.compro-list').fadeIn('slow'); 
          $('.pos-category').fadeOut('slow');
          $('.apps-category').fadeOut('slow'); 
        }
      });

      $(document).on('click', '#apps', function (e) {
        if($('.apps-category').hasClass('isactive')){
          $(".apps-category").attr('style','-webkit-animation: apps-inactive 2s 1 ease-in-out;-webkit-animation-fill-mode: forwards;');
          $(".apps-list").attr('style','-webkit-animation: apps-inactive 2s 1 ease-in-out;-webkit-animation-fill-mode: forwards;');
          $('.apps-category').removeClass('isactive');
          $('.apps-list').fadeOut('slow');
          $('.compro-category').fadeIn('slow');
          $('.pos-category').fadeIn('slow');
        }else{
          $(".apps-category").attr('style','-webkit-animation: apps-active 2s 1 ease-in-out;-webkit-animation-fill-mode: forwards;');
          $(".apps-list").attr('style','-webkit-animation: apps-active 2s 1 ease-in-out;-webkit-animation-fill-mode: forwards;');
          $('.apps-category').addClass('isactive');
          $('.apps-list').fadeIn('slow'); 
          $('.compro-category').fadeOut('slow');
          $('.pos-category').fadeOut('slow'); 
        }
      });

      $(document).on('mouseover', '#liberte', function (e) {
        $('.detail-work').attr('style', 'background-image:url("assets/img/work/libertepos.png")');
      });

      $(document).on('mouseleave', '#liberte', function (e) {
        $('.detail-work').removeAttr('style', 'background-image:url("assets/img/work/libertepos.png")');
      });

      $(document).on('mouseover', '#sbpos', function (e) {
        $('.detail-work').attr('style', 'background-image:url("assets/img/work/sbpos.png")');
      });

      $(document).on('mouseleave', '#sbpos', function (e) {
        $('.detail-work').removeAttr('style', 'background-image:url("assets/img/work/sbpos.png")');
      });

      $(document).on('mouseover', '#spotted', function (e) {
        $('.detail-work').attr('style', 'background-image:url("assets/img/work/spottedpos.png")');
      });

      $(document).on('mouseleave', '#spotted', function (e) {
        $('.detail-work').removeAttr('style', 'background-image:url("assets/img/work/spottedpos.png")');
      });

      $(document).on('mouseover', '#kspos', function (e) {
        $('.detail-work').attr('style', 'background-image:url("assets/img/work/kspos.png")');
      });

      $(document).on('mouseleave', '#kspos', function (e) {
        $('.detail-work').removeAttr('style', 'background-image:url("assets/img/work/kspos.png")');
      });

      $(document).on('mouseover', '#sbweb', function (e) {
        $('.detail-work').attr('style', 'background-image:url("assets/img/work/sbweb.png")');
      });

      $(document).on('mouseleave', '#sbweb', function (e) {
        $('.detail-work').removeAttr('style', 'background-image:url("assets/img/work/sbweb.png")');
      });

      $(document).on('mouseover', '#maung', function (e) {
        $('.detail-work').attr('style', 'background-image:url("assets/img/work/maung.png")');
      });

      $(document).on('mouseleave', '#maung', function (e) {
        $('.detail-work').removeAttr('style', 'background-image:url("assets/img/work/maung.png")');
      });

      $(document).on('mouseover', '#rayah', function (e) {
        $('.detail-work').attr('style', 'background-image:url("assets/img/work/rayah.png")');
      });

      $(document).on('mouseleave', '#rayah', function (e) {
        $('.detail-work').removeAttr('style', 'background-image:url("assets/img/work/rayah.png")');
      });

      $(document).on('mouseover', '#maris', function (e) {
        $('.detail-work').attr('style', 'background-image:url("assets/img/work/maris.png")');
      });

      $(document).on('mouseleave', '#maris', function (e) {
        $('.detail-work').removeAttr('style', 'background-image:url("assets/img/work/maris.png")');
      });

      $(document).on('mouseover', '#hhgarage', function (e) {
        $('.detail-work').attr('style', 'background-image:url("assets/img/work/hhgarage.png")');
      });

      $(document).on('mouseleave', '#hhgarage', function (e) {
        $('.detail-work').removeAttr('style', 'background-image:url("assets/img/work/hhgarage.png")');
      });

      $(document).on('mouseover', '#middle', function (e) {
        $('.detail-work').attr('style', 'background-image:url("assets/img/work/Middle.png")');
      });

      $(document).on('mouseleave', '#middle', function (e) {
        $('.detail-work').removeAttr('style', 'background-image:url("assets/img/work/Middle.png")');
      });

      $(document).on('mouseover', '#display', function (e) {
        $('.detail-work').attr('style', 'background-image:url("assets/img/work/display.png")');
      });

      $(document).on('mouseleave', '#display', function (e) {
        $('.detail-work').removeAttr('style', 'background-image:url("assets/img/work/display.png")');
      });

      //Smartphone Only
      $(document).on('click', '#pos-sm-menu', function (e) {
        if($('.sm-menu-pos').hasClass('isactive')){
          $(".sm-menu-pos").attr('style','transform: translate(0%);');
          $('.sm-menu-pos').removeClass('isactive');
          $('#pos-sm').fadeOut('slow');
          $('.sm-menu-compro').fadeIn('slow');
          $('.sm-menu-apps').fadeIn('slow');
        }else{
          $('.sm-menu-pos').addClass('isactive');
          $(".sm-menu-pos").attr('style','transform: translate(125%);z-index:10');
          $('#pos-sm').fadeIn('slow'); 
          $('.sm-menu-compro').fadeOut('slow');
          $('.sm-menu-apps').fadeOut('slow'); 
        }
      });

      $(document).on('click', '#apps-sm-menu', function (e) {
        if($('.sm-menu-apps').hasClass('isactive')){
          $(".sm-menu-apps").attr('style','transform: translate(0%);');
          $('.sm-menu-apps').removeClass('isactive');
          $('#apps-sm').fadeOut('slow');
          $('.sm-menu-compro').fadeIn('slow');
          $('.sm-menu-pos').fadeIn('slow');
        }else{
          $('.sm-menu-apps').addClass('isactive');
          $(".sm-menu-apps").attr('style','transform: translate(-135%);');
          $('#apps-sm').fadeIn('slow'); 
          $('.sm-menu-compro').fadeOut('slow');
          $('.sm-menu-pos').fadeOut('slow'); 
        }
      });

      $(document).on('click', '#compro-sm-menu', function (e) { 
      // $('#pos').on('click',function(){
        if($('.sm-menu-compro').hasClass('isactive')){
          $('.sm-menu-compro').removeClass('isactive');
          $('#compro-sm').fadeOut('slow');
          $('.sm-menu-pos').fadeIn('slow');
          $('.sm-menu-apps').fadeIn('slow');
        }else{
          $('.sm-menu-compro').addClass('isactive');
          $('#compro-sm').fadeIn('slow'); 
          $('.sm-menu-pos').fadeOut('slow');
          $('.sm-menu-apps').fadeOut('slow'); 
        }
      });