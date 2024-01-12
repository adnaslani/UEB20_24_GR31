document.addEventListener('DOMContentLoaded', function () {
   // Sample wishlist array to store product IDs
   let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

   // Function to remove an item from the wishlist
   function removeFromWishlist(index) {
        wishlist.splice(index, 1);
       updateWishlistUI();
       saveWishlistToLocalStorage();
  }

   // Function to update the UI based on wishlist status
  function updateWishlistUI() {
      const wishlistItems = document.getElementById('wishlist-items');
      wishlistItems.innerHTML = '';

       wishlist.forEach((item, index) => {
           const listItem = document.createElement('li');
          listItem.classList.add('list-group-item');
          listItem.textContent = `Product ${item + 1}`;

           const removeButton = document.createElement('button');
          removeButton.classList.add('btn', 'btn-danger', 'btn-sm', 'float-end');
           removeButton.textContent = 'Remove';

          // Assign a unique ID to each remove button based on the product index
           removeButton.id = `removeBtn${item + 1}`;

           removeButton.addEventListener('click', function () {
               removeFromWishlist(index);
           });

           listItem.appendChild(removeButton);
           wishlistItems.appendChild(listItem);
        });
   }

    // Function to save the updated wishlist to localStorage
    function saveWishlistToLocalStorage() {
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }

    // Initial update of the UI
    updateWishlistUI();
});
document.addEventListener('DOMContentLoaded', function () {
    var removeButtons = document.querySelectorAll('#wishlist-items .btn-danger');

    removeButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Get the parent li element and remove it
            var listItem = button.closest('li');
            if (listItem) {
                listItem.remove();
            }
        });
    });
});