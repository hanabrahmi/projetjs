var quantityElements = document.querySelectorAll('.quantity');

quantityElements.forEach(function(quantityElement) {
    var btnPlus = quantityElement.querySelector('.plus');
    var btnMoins = quantityElement.querySelector('.moin');
    var counter = quantityElement.querySelector('.counter');

    btnPlus.addEventListener("click", function() {
        var currentValue = parseInt(counter.textContent);
        counter.textContent = currentValue + 1;
        calculateTotal();
    });

    btnMoins.addEventListener("click", function() {
        var currentValue = parseInt(counter.textContent);
        if (currentValue > 0) {
            counter.textContent = currentValue - 1;
            calculateTotal();
        }
    });
});

function calculateTotal() {
    var total = 0;
    var prices = document.querySelectorAll('.price');
    var quantities = document.querySelectorAll('.counter');

    for (var i = 0; i < prices.length; i++) {
        var price = parseFloat(prices[i].textContent);
        var quantity = parseInt(quantities[i].textContent);
        total += price * quantity;
    }

    var totalPriceElement = document.getElementById("prix-total-montre");
    totalPriceElement.textContent = total.toFixed(3) + "TND";
}
var icons = document.querySelectorAll(".fa-heart");

icons.forEach(function(icon) {
    icon.addEventListener("click", function() {
        icon.classList.toggle("active");
    });
});
