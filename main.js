
$(document).ready(function(){

  console.log("jake weary")
  // $("#contact-toggle").on("click", function(){
  //   console.log("togglee mee")
  //   $("#contact-container").toggle();
  // })
  $(window).scroll(function() {
  if ($(this).scrollTop() > 1){  
      $('header').addClass("sticky");
    }
    else{
      $('header').removeClass("sticky");
    }
  });

})
