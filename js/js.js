$(document).ready(function () {

    function registerClickHandler() {
        // Implement the click handler here for button of class 'remove'
        $('.trash').click(function() {
          $(this).parent().parent().parent().parent().remove();
        });
      }
      
      registerClickHandler();
    
    
      function PinkSeperatorAnim() {
        var reveals = document.querySelectorAll(".PinkSeperator, .RoundedImageCarousel ,.Cards3Part,.ProductCarouse,.whyUs,.youNeedHelp,.FooterCards,.FooterServices");
      
        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 150;
      
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
      }
      
      window.addEventListener("scroll", PinkSeperatorAnim);    
  });