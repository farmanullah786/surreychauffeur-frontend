(function(a){a(document).ready(function(){a("#bar1").barfiller({barColor:"#fe1f8d",duration:3000});a("#bar2").barfiller({barColor:"#fe1f8d",duration:3000});a("#bar3").barfiller({barColor:"#fe1f8d",duration:3000});a("#bar4").barfiller({barColor:"#fe1f8d",duration:3000});a("#bar5").barfiller({barColor:"#fe1f8d",duration:3000})});a(document).scroll(function(){var c=a(window).scrollTop();var b=a("#navbar").outerHeight();if(c>=b+10){a(".ow-navigation").removeClass("navbar-fixed-top");a(".ow-navigation").addClass("navbar-fixed-top animated fadeInDown").delay(2000).fadeIn()}else{a(".ow-navigation").removeClass("navbar-fixed-top animated fadeInDown")}});a(document).ready(function(e){var c=e(window).scrollTop();var b=e("#navbar").outerHeight();var d=location.href.replace(/#.*/,"");e("#navbar").find("a[href]").each(function(h,f){var j=e(f);var g=j.attr("href");if(g.indexOf(d+"#")==0){g=g.replace(d,"");j.attr("href",g)}});e(".navbar-nav li a[href*=#]:not([href=#]), .site-logo a[href*=#]:not([href=#])").on("click",function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var f=e(this.hash);f=f.length?f:e("[name="+this.hash.slice(1)+"]");if(f.length){e("html, body").animate({scrollTop:f.offset().top-83},1000,"easeInOutExpo");return false}}});if(e(".what-we-do").length){e(".what-we-do").each(function(){var f=e(this);var g=e(this).data("value");f.appear(function(){e(".what-we-do .col-md-8").addClass("animated fadeInRight")})})}e(".faq-list li a").on("click",function(){var f=e(this).attr("href").split("-");e("[id*='faq-']").removeClass("active");e("[id='faq-"+f[1]+"']").addClass("active");e(".faq-list li a").removeClass("active");e(this).addClass("active")});e(".faq-list li a,.faq-content > a").on("click",function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var f=e(this.hash);f=f.length?f:e("[name="+this.hash.slice(1)+"]");if(f.length){e("html, body").animate({scrollTop:f.offset().top-160},1000,"easeInOutExpo");return false}}})});a(window).load(function(){if(!a("html").is(".ie6, .ie7, .ie8")){a("#site-loader").delay(1000).fadeOut("slow")}else{a("#site-loader").css("display","none")}})})(jQuery);