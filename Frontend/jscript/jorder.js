document
  .getElementById("order-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get the form data
    const formData = new FormData(this);

    // Send a POST request to the server
    fetch("/process-order", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          // If the request was successful, display an order confirmation message
          return response.text();
        } else {
          throw new Error("Failed to process order");
        }
      })
      .then((data) => {
        alert(data); // Display the order confirmation message
        clearOrder(); // Clear the order form and shopping cart
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Failed to place order. Please try again later.");
      });
  });

// Event listener for form submission (checking cart before placing order)
document
  .getElementById("order-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Check if there are items in the shopping cart
    const cartItems = document.querySelectorAll("#cart-items li");
    if (cartItems.length === 0) {
      alert("Please add items to your cart before placing an order.");
      return; // Exit the function if there are no items in the cart
    }

    // If there are items in the cart, display confirmation message
    displayConfirmationMessage();
  });