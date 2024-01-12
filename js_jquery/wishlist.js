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