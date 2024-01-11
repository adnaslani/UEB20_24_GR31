<script src="js_jquery/about.js"></script>

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


 