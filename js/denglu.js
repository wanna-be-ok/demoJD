$(document).ready(function () {
   $("#dd .dc li").each(function (index) {
       $(this).click(function () {
           $("#dd .dc li").eq(1).removeClass("red");
           $("#dd .dc li").eq(0).removeClass("red");
           if (index==0) {
               $(this).addClass("red");
               $("#dd .dc .xuanze").eq(0).removeClass("dzh");
               $("#dd .dc .xuanze").eq(1).addClass("dzs");
           } else if(index==1) {
               $(this).addClass("red");
               $("#dd .dc .xuanze").eq(0).addClass("dzh");
               $("#dd .dc .xuanze").eq(1).removeClass("dzs");
           }
       })
   }) ;
   $(".hhd").each(function () {
       $(".hhd").hover(function(){$(".dyt").animate({marginLeft:'20px'},function () {
           $(".dct").css({display:'block', float:'left'});
       });
       },function(){

           $(".dct").css({display:'none'});
           $(".dyt").animate({marginLeft:'28.4%'});
       });

   });

   $(".dzh .dddd").each(function (index) {
      $(this).click(function () {
          if (index==0) {
              $("label").eq(1).removeClass("lbs");
              $("label").eq(index).removeClass("label");
              $("label").eq(index).addClass("lbt");
              $("label").eq(1).addClass("label");
          } else if (index==1) {
              $("label").eq(0).removeClass("lbt");
              $("label").eq(0).addClass("label");
              $("label").eq(1).removeClass("label");
              $("label").eq(1).addClass("lbs");
          }
      })
   });
});




