    function toggleSidebar() {
      document.querySelector('.side-bar').classList.toggle('active');
    }
  
    document.getElementById('toggle-sidebar').addEventListener('click', function(event) {
      toggleSidebar();
      event.stopPropagation();
    });
  

    document.body.addEventListener('click', function() {
      if (document.querySelector('.side-bar').classList.contains('active')) {
        toggleSidebar();
      }
    });
document.querySelectorAll('.accordion-container .accordion').forEach(accordion =>{
    accordion.onclick = () =>{
        accordion.classList.toggle('active');
    }
});

var swiper = new Swiper(".home-slider", {
    loop:true,
    grabCursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".review-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween: 20,
    breakpoints: {
        450: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});