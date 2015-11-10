
$(document).ready(function(){

  console.log("jake weary")
  // $("#contact-toggle").on("click", function(){
  //   console.log("togglee mee")
  //   $("#contact-container").toggle();
  // })
  $(window).scroll(function() {
  if ($(this).scrollTop() > 1){  
      $('header').addClass("sticky");
      $('#icon-list').addClass("sticky-icon")
    }
    else{
      $('header').removeClass("sticky");
      $('#icon-list').removeClass("sticky-icon")

    }
  });

  // $("#project").on("click", function(){
  //   console.log("clciked")
  //   $("#about-me-content").toggle();
  // })

})
