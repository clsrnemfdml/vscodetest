 //버튼을 클릭했을때 사이드바를 0으로 작업 
 $(".navBtn").click(function() {
    // $("#side-nav").css("left", 0);  //한번만 가능함
    // $("#side-nav").addClass("open");
    // $("#side-nav").animate({"left":"0"}, 200);
    $("#side-nav").toggleClass("on");
    if($("#side-nav").hasClass("on")){
        $("#side-nav").animate({"left":"0"}, 200);
        $(".navBtn").text("close");
    }else{
        $("#side-nav").animate({"left":"-300"}, 200);
        $(".navBtn").text("open");
    }
    
});

// 버튼눌렀을때 alert창 뜨는 것
var cons = document.getElementById("contBtn");
cons.addEventListener("click" , function(){
    alert("CART ADD");
})



// $(".contBtn").click(function(){
//     alert("CART추가완료");
// });

