<script>
  $(document).ready(function() {
    // Handle click on the heart icon
    $('.fas.fa-heart').on('click', function() {
      // Find the parent box of the clicked heart icon
      var productBox = $(this).closest('.box');

      // Get product information from the box
      var productId = productBox.data('product-id');
      var productName = productBox.find('.content h3').text();

      // Check if the product is already in the favorites
      if ($('#wishlist:contains("' + productName + '")').length === 0) {
        // If not, add it to the favorites
        $('#wishlist').append('<div data-product-id="' + productId + '">' + productName + '</div>');
      } else {
        // If it's already in the favorites, you can provide some feedback or handle it accordingly
        alert('Product already in favorites!');
      }
    });
  });
</script>