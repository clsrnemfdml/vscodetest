var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

// document.getElementById("modal_opne_btn").onclick = function() {
//     document.getElementById("modal").style.display="block";
// };

// document.getElementById("modal_btn").onclick = function() {
//     document.getElementById("modal").style.display="none";
// };   

// 제이쿼리
    $("#modal_opne_btn").click(function(){
        $("#modal").attr("style", "display:block");
    });
    $("#modal_opne_btn2").click(function(){
        $("#modal").attr("style", "display:block");
    });
    $("#modal_opne_btn3").click(function(){
        $("#modal").attr("style", "display:block");
    });
    $("#modal_opne_btn4").click(function(){
        $("#modal").attr("style", "display:block");
    });
    $("#modal_opne_btn5").click(function(){
        $("#modal").attr("style", "display:block");
    });
    $("#modal_opne_btn6").click(function(){
        $("#modal").attr("style", "display:block");
    });
   
     $("#modal_btn").click(function(){
        $("#modal").attr("style", "display:none");
    });      


    $(".mNav").click(function() {
        $(".menu").slideToggle();
        });
