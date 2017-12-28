$(document).ready(function(){
  // window position check
  $(window).scroll(function (event) {
      var sc = $(window).scrollTop();
      if( sc > 600 && $(".nav-wrap").hasClass("none")){
        $(".nav-wrap").removeClass("none");
        if($(window).width() < 998){
          $(".box-nav").addClass("none");
        }
      }else if(sc < 600 && !($(".nav-wrap").hasClass("none"))){
         $(".nav-wrap").addClass("none");
      }
  });
  $(".btn-cust").click(function(){
    $(".box-nav").toggle("none");
  });
});
