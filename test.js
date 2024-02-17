var quantityElements = document.querySelectorAll('.quantity');
quantityElements.forEach(function(quantityElement) {
    var btnPlus = quantityElement.querySelector('.plus');
    var btnMoins = quantityElement.querySelector('.moin');
    var counter = quantityElement.querySelector('.counter');
    btnPlus.addEventListener("click", function() {
        counter.innerHTML++;
    });
    btnMoins.addEventListener("click", function() {
        if (parseInt(counter.innerHTML) > 0) {
            counter.innerHTML--;
        }
    });
});
var icons = document.querySelectorAll(".fa-heart");
icons.forEach(function(icon) {
    icon.addEventListener("click", function() {
        icon.classList.toggle("active");
    });
});
var deleteButtons = document.querySelectorAll(".delete-btn");
deleteButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        button.parentElement.remove();
    });
});
var commanderBtn = document.getElementById("commander-btn");
commanderBtn.addEventListener("click", function() {});