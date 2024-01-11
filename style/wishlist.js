<script>
  $(document).ready(function() {
    // Handle click on the heart icon
    $('.heart-icon').on('click', function() {
      // Get product information
      var productName = $(this).siblings('h3').text();

      // Check if the product is already in the wishlist
      if ($('#wishlist:contains("' + productName + '")').length === 0) {
        // If not, add it to the wishlist
        $('#wishlist').append('<div>' + productName + '</div>');
      } else {
        // If it's already in the wishlist, you can provide some feedback or handle it accordingly
        alert('Product already in wishlist!');
      }
    });
  });
</script>