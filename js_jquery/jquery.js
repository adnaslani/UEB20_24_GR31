<script src="js_jquery/jquery.js"></script>

//SIDEBAR
$(document).ready(function() {
    
    $("#toggle-sidebar").click(function() {
        $(".side-bar").toggleClass("active");
    });

    
    $("#close-side-bar").click(function() {
        $(".side-bar").removeClass("active");
    });

    $(".navbar-nav a").click(function() {
        if ($(window).width() < 768) {
            $(".side-bar").removeClass("active");
        }
    });


//FORMS CART
$("form").submit(function(event) {
    event.preventDefault();

        var firstName = $("#firstName").val();
        if (!firstName) {
            alert("First name is required");
        } else {
            alert("Form submitted successfully!");
        }
    });

//CHECKBOX Cart
    $("#sameAddress").change(function() {
        if ($(this).is(":checked")) {

            $("#country, #city, #postcode").prop("disabled", true);
        } else {

            $("#country, #city, #postcode").prop("disabled", false);
        }
    });
});

//CAROUSEL Home

    $(document).ready(function() {
      $('#myCarousel').carousel();
  
   
      $('.carousel-control-prev').click(function() {
        $('#myCarousel').carousel('prev');
      });
  
      $('.carousel-control-next').click(function() {
        $('#myCarousel').carousel('next');
      });
    });

