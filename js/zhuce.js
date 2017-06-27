
$(document).ready(function () {
    $("#rz .d4 .la").on("click", function(e){
        if($("#rz .ztc").is(":hidden")){
            $("#rz .ztc").show();
        }else{
            $("#rz .ztc").hide();
        }

        $(document).on("click", function(){
            $("#rz .ztc").hide();
        });

        e.stopPropagation();
    });
    $("#rz .ztc").on("click", function(e){
        e.stopPropagation();
    });
    $("#rz .ztc ul li").each(function (index) {
        $(this).mouseover(function () {
            $("#rz .ztc .ztcd1").removeClass("ztcd1");
            $("#rz .ztc div").eq(index).addClass("ztcd1");
        })
    })


     $("#rz .ztc dd").each(function () {
         $(this).click(function () {
              $("#rz .d4 .la").html('<label for="zg" class="la">'+$(this).text()+'<img src="img3/xia.png"></label>');
         })
     })
});