jQuery(document).ready(function(e) {
  /* For Sticky Header */
  jQuery("header").before(jQuery("header").clone().addClass("animateIt"));
  jQuery(window).on("scroll", function () {
      jQuery("body").toggleClass("down", (jQuery(window).scrollTop() > 160));
  });
  /* For Sticky Header */
  /* Hide mobile menu after click starts */
  jQuery('body').on('click','.pushmenu-open #top-menu li a', function(event){
    jQuery('#nav_list.active').trigger('click');
  });
  /* Hide mobile menu after click ends */
  /* For Smooth SCroll */
  // jQuery('header li a[href^=#], .ftr_menu a[href^=#]').on('click', function(event){
  //   event.preventDefault();
  //   jQuery('html,body').animate({scrollTop:jQuery(this.hash).offset().top-50}, 500);
  // });
  jQuery('header li a[href^=#], .ftr_menu a[href^=#]').on('click', function(event){
    event.preventDefault();
    
    var width = $(window).width(); 
    var height = $(window).height();    
    
    if ((width >= 1280) && (height>=1024)) {
      jQuery('html,body').animate({scrollTop:jQuery(this.hash).offset().top-59}, 500);
    }else if ((width >= 1024  ) && (height>=768)){
      jQuery('html,body').animate({scrollTop:jQuery(this.hash).offset().top-59}, 500);
    }else if ((width >= 800) && (height>=600)){
      jQuery('html,body').animate({scrollTop:jQuery(this.hash).offset().top-59}, 500);
    }else{
      jQuery('html,body').animate({scrollTop:jQuery(this.hash).offset().top}, 500);
    }
    
  });
  /* For Smooth SCroll */
  /* For One Page Menu Active */

// Cache selectors
    var topMenu = jQuery(".animateIt #top-menu"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = jQuery(this.hash);
      if (item.length) { return item; }
    });

  topMenu.find('li.menu-item-home a').click(function(){
      jQuery('html,body').animate({scrollTop: '0px'}, 500);
      return !1;
  });

  // Bind to scroll
  jQuery(window).scroll(function(){
    // Get container scroll position
    var winTop = jQuery(this).scrollTop(), fromTop = winTop+topMenuHeight;
    
    // Get id of current scroll item
    var cur = scrollItems.map(function(){
      if (jQuery(this).offset().top < (fromTop + 70))
        return this;
    });
    // Get the id of the current element
    cur = cur[cur.length-1];
    var id = cur && cur.length ? cur[0].id : "";
    // Set/remove active class
      
    menuItems.parent().removeClass("active current-menu-item").end().filter("[href='#"+id+"']").parent().addClass("active");
    topMenu.find('li.menu-item-home').toggleClass('active', id=='');
  });
/* For One Page Menu Active */
});// JavaScript Document

// menu
 jQuery(document).ready(function($) {
    jQuery('nav ul li:has(ul)').addClass('drop_down_menu');
    jQuerymenuLeft = jQuery('.pushmenu-left');
    jQuerynav_list = jQuery('#nav_list');

    jQuerynav_list.click(function() {
      jQuery(this).toggleClass('active');
      jQuery('.pushmenu-push').toggleClass('pushmenu-push-toright');
      jQuerymenuLeft.toggleClass('pushmenu-open');
    });

    jQuery("li.drop_down_menu").click(function(e){
      if (this == e.target) {
        jQuery(this).toggleClass('open');
        jQuery(this).children('ul').slideToggle('fast');
      }

    });
  });

// timer
 jQuery(document).ready(function($) {

            var myDate = new Date();
myDate.setDate(myDate.getDate() + 31);
            $("#countdown").countdown(myDate, function (event) {
                $(this).html(
                    event.strftime(
                        '<div class="timer-wrapper"><div class="time">%D</div><span class="text">DAYS</span></div><span class="center_dot">:</span><div class="timer-wrapper"><div class="time">%H</div><span class="text">HOURS</span></div><span class="center_dot">:</span><div class="timer-wrapper"><div class="time">%M</div><span class="text">MINS</span></div><span class="center_dot">:</span><div class="timer-wrapper"><div class="time">%S</div><span class="text">SECONDS</span></div>'
                    )
                );
            });

        });