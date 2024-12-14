window.onload = function() {
    if (typeof(Storage) !== "undefined") {
        let count = localStorage.getItem('hitCount') ? parseInt(localStorage.getItem('hitCount')) : 0;
        count++;
        localStorage.setItem('hitCount', count);
        document.getElementById('hitCounter').textContent = count.toString().padStart(4, '0');
    } else {
        console.log("Sorry, your browser does not support Local Storage.");
    }
    // Add click event to the price tag
    const priceTag = document.getElementById("priceTag");
    priceTag.addEventListener("click", function () {
        window.location.href = "checkout.html"; // Redirects to checkout page
    });
};