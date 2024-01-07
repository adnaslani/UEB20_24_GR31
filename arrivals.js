document.addEventListener('DOMContentLoaded', function () {
   
    var boxes = document.querySelectorAll('.arrivals .box');

   
    function handleBoxClick(event) {
        
        var productId = event.currentTarget.dataset.productId;
        var productDetailsURL = 'product-details.html?id=' + productId
        window.location.href = productDetailsURL;
    }

    boxes.forEach(function (box) {
        box.addEventListener('click', handleBoxClick);
    });
});
