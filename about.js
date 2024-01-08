
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

const accordions = document.querySelectorAll('.faq .accordion-container .accordion');
      
 accordions.forEach(accordion => {
   accordion.addEventListener('click', function () {
    
     this.classList.toggle('active');

     accordions.forEach(otherAccordion => {
       if (otherAccordion !== accordion) {
         otherAccordion.classList.remove('active');
       }
     });
   });
 });