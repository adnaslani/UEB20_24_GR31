/ Simple client-side wishlist management using localStorage

// Sample wishlist array to store product IDs
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

// Function to toggle wishlist status
function toggleWishlist(productId) {
    const index = wishlist.indexOf(productId);

    if (index === -1) {
        // Product is not in the wishlist, add it
        wishlist.push(productId);
    } else {
        // Product is already in the wishlist, remove it
        wishlist.splice(index, 1);
    }

    // Save the updated wishlist to localStorage
    localStorage.setItem('wishlist', JSON.stringify(wishlist));

    updateWishlistUI();
}

// Function to update the UI based on wishlist status
function updateWishlistUI() {
    const wishlistIcons = document.querySelectorAll('.wishlist-icon');

    wishlistIcons.forEach((icon, index) => {
        const productId = index + 1; // Assuming product IDs start from 1

        if (wishlist.includes(productId)) {
            icon.classList.add('active');
        } else {
            icon.classList.remove('active');
        }
    });
}
