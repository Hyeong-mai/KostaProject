function sideMv(seq){
    var offset = $("#mv" + seq).offset();
    $('html, body').scrollTop(offset.top+1);
}


$(window).ready(function(){
    var value = 15;
    var page = 1;
    $(".side_btn_right").click(function(){
        if(value > -265){
            value = value -70;
            $(".header_slide_content").animate({
                "left":value+"%"
            },'swing');
        } 
        $("#li"+page).removeClass("page");
        page = page+1;
        $("#li"+page).addClass("page");
    });
    $(".side_btn_left").click(function(){
        if(value < 15){
            value = value + 70;
            $(".header_slide_content").animate({
                "left":value+"%"
            },'swimg');
        } 
        $("#li"+page).removeClass("page");
        page = page-1;
        $("#li"+page).addClass("page");
    });
    $(".side_btn").click(function(){
        if(value == -265){
            $(".side_btn_right").addClass("on");
        }else{
            $(".side_btn_right").removeClass("on");
        }
        if(value == 15){
            $(".side_btn_left").addClass("on");
        }else{
            $(".side_btn_left").removeClass("on");
        }
    });
    $(".li_btn").click(function(){
        var li = $(this).val();
      
            $("#li"+page).removeClass("page");
            page =li;
            $("#li"+page).addClass("page");
        if(li == 1){
            value = 15;
            $(".side_btn_left").addClass("on");
            $(".side_btn_right").removeClass("on");
        }else if(li == 2){
            value = -55;
            $(".side_btn_left").removeClass("on");
            $(".side_btn_right").removeClass("on");
        }else if(li == 3){
            value = -125;
            $(".side_btn_left").removeClass("on");
            $(".side_btn_right").removeClass("on");
        }else if(li == 4){
            value = -195;
            $(".side_btn_left").removeClass("on");
            $(".side_btn_right").removeClass("on");
        }else if(li == 5){
            value = -265;
            $(".side_btn_left").removeClass("on");
            $(".side_btn_right").addClass("on");
        }
        $(".header_slide_content").animate({
            "left":value+"%"
        },'swing');
    }); 

    var offset1 = $("#mv1").offset().top;
    var offset2 = $("#mv2").offset().top;
    var offset3 = $("#mv3").offset().top;
    var offset4 = $("#mv4").offset().top;
$(".sd").click(function(){
    var scrollValue = $(document).scrollTop(); 
    if(offset1 <= scrollValue){
        $(".sd").removeClass("in");
        $('.side_menu1').addClass("in");
    }if(offset2 <= scrollValue){
        $(".sd").removeClass("in");
        $('.side_menu2').addClass("in");
    }if(offset3 <= scrollValue){
        $(".sd").removeClass("in");
        $('.side_menu3').addClass("in");
    }if(offset4 <= scrollValue){
        $(".sd").removeClass("in");
        $('.side_menu4').addClass("in");
    }
});
$(window).scroll(function () { 
    var scrollValue = $(document).scrollTop(); 
    if(offset1 <= scrollValue){
        $(".sd").removeClass("in");
        $('.side_menu1').addClass("in");
    }if(offset2 <= scrollValue){
        $(".sd").removeClass("in");
        $('.side_menu2').addClass("in");
    }if(offset3 <= scrollValue){
        $(".sd").removeClass("in");
        $('.side_menu3').addClass("in");
    }if(offset4 <= scrollValue){
        $(".sd").removeClass("in");
        $('.side_menu4').addClass("in");
    }
 });


});

var inputImage = document.querySelector(".img_upload");

inputImage.addEventListener("change", function(evt){
    var val = evt.target.files.length
    var int = 9;
    if(val > int){
        return false;
    }
})

$(".del_btn").click(function(){
    $("#image_container").empty(); 
    $(".del_btn").css({
        "visibility": "hidden"
    });
    $("#image_container>i").css({
        "display":"none"
    });
});

function setThumbnail(event) { 
    var int = event.target.files.length;
    var asd = $("#image_container>img").length;

    if(int + asd >= 1 && int + asd <= 9){
        $(".del_btn").css({
            "visibility": "visible"
        });
        $("#image_container>i").css({
            "display":"none"
        });
    }
    if(asd + int >9){
        alert("사진은 9개까지 업로드 가능합니다.");
        return false;
    }else{
    if(int > 9){
        alert("사진은 9개까지 업로드 가능합니다.");
        event.target.files.value = '';
        return false;
    }else{
        for (var image of event.target.files) { 
            var reader = new FileReader(); 
            reader.onload = function(event) { 
                var img = document.createElement("img"); 
                img.setAttribute("src", event.target.result); 
                document.querySelector("div#image_container").appendChild(img); 
            }; 
            reader.readAsDataURL(image); 
        } 
    }
}
}

$("#search_page_open_btn").click(function(){
    $("body,html").css({
        "overflow":"hidden"
    })
    $(".search_page").css({
        "top":"0"
    });
    $("#search_page_close_btn").css({
        "display":"block"
    });
    $("#search_page_open_btn").css({
        "display":"none"
    });
    $("#plus_page_open_btn").css({
        "display":"none"
    });
});
$("#search_page_close_btn").click(function(){
    $("body,html").css({
        "overflow":"unset"
    })
    $(".search_page").css({
        "top":"100%"
    });
    $("#search_page_open_btn").css({
        "display":"block"
    });
    $("#search_page_close_btn").css({
        "display":"none"
    });
    $("#plus_page_open_btn").css({
        "display":"block"
    });
});

$("#plus_page_open_btn").click(function(){
    $("body,html").css({
        "overflow":"hidden"
    })
    $(".article_item").css({
        "display":"flex"
    });
    $("#plus_page_close_btn").css({
        "display":"block"
    });
    $("#plus_page_open_btn").css({
        "display":"none"
    });
    $("#search_page_open_btn").css({
        "display":"none"
    });
});
$("#plus_page_close_btn").click(function(){
    $("body,html").css({
        "overflow":"unset"
    })
    $(".article_item").css({
        "display":"none"
    });
    $("#plus_page_open_btn").css({
        "display":"block"
    });
    $("#plus_page_close_btn").css({
        "display":"none"
    });
    $("#search_page_open_btn").css({
        "display":"block"
    });
});


var side_val = 0;
$(".fa-bars").click(function(){
    side_val = 1;
    if(side_val == 1){
        $(".value_plus_sidemenu").animate({
            "left":"0"
        },200); 
        $(".plus_menu_logo").animate({  
            "opacity" : "0"
        },200);
        $(".value_plus_side_wrap").css({
            "top":"0"
        });
    }
});
$(".value_plus_side_wrap").click(function(){
    side_val = 0;
   if(side_val == 0){
    $(".value_plus_sidemenu").animate({
        "left":"-80%"
    },200);
    $(".plus_menu_logo").animate({  
        "opacity" : "1"
    },200);
    $(".value_plus_side_wrap").css({
        "top":"-10000%"
    });
   }
});