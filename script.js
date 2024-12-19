function calculateTotalCost() {
    var price = parseFloat(document.getElementById('price').value) || 0;
    var quantity = parseInt(document.getElementById('quantity').value) || 0;
    var taxRate = parseFloat(document.getElementById('tax').value) || 0;
    var discount = parseFloat(document.getElementById('discount').value) || 0;

    var subtotal = price * quantity;
    var taxAmount = (taxRate / 100) * subtotal;
    var total = subtotal + taxAmount - discount;

    var totalCostElement = document.getElementById('totalCost');
    totalCostElement.innerText = "Total Cost: $" + total.toFixed(2);
}
