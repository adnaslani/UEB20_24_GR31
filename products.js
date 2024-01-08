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


document.addEventListener('DOMContentLoaded', function () {

    function addToCart(productId) {
        console.log(`Product added to cart: ${productId}`);
    }

    function addToFavorites(productId) {
        console.log(`Product added to favorites: ${productId}`);
    }

    document.addEventListener('click', function (event) {
        const target = event.target;

        if (target.classList.contains('add-to-cart')) {
            const productId = target.closest('.box').dataset.productId;
            addToCart(productId);
        }

        if (target.classList.contains('add-to-favorites')) {
            const productId = target.closest('.box').dataset.productId;

            addToFavorites(productId);
        }
    });
});
