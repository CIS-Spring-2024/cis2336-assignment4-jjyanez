

const menuItems={
    Breakfast:[
        { name: "Yogurt Parfait", price: "$4.00", image: "../images/yogurt.jpg", id: 1},
        { name: "Pancakes", price: "$8.00", image: "../images/pancake.png", id: 2 }, 
        { name: "Waffles", price: "$7.00", image: "../images/waffle.png", id: 3}, 
    ], 
    Lunch: [
        { name: "Traditional Burger", price: "$8.00", image: "../images/burger.jpg", id: 4},
        { name: "Classic Fried Chicken", price: "$7.00", image: "../images/chicken.png", id: 5},
        { name: "The Salad", price: "$7.00", image:"../images/salad.jpg", id: 6},
    ],
    Beverages: [
        { name: "Coffee", price: "$4.00", image: "../images/coffee.jpg", id: 7},
        { name: "Iced Tea", price: "$4.00", image: "../images/tea.jpeg", id: 8}, 
        { name: "Fountain Drink", price: "$5.00", image: "../images/soda.jpeg", id: 9}, 

    ],
};

/*
[
    {
        FoodName: "Yogurt Parfait",
        foodimg: '../imagef/yogurt.jpg',
        price: "$ 4.00",
        type: "breakFast",
        des: "A simple treat for the morning. Topped with ganola and organic fruit"
    },
    {
        FoodName: "Pancakes",
        foodimg: '../imagef/pancake.png',
        price: "$ 8.00",
        type: "breakFast",
        des: "An all American classic breakfast option. Served with butter and syrup"
    },
    {
        FoodName: "Waffles",
        foodimg: '../imagef/waffle.png',
        price: "$ 7.00",
        type: "breakFast",
        des: "You can never go wrong with this breakfast staple. Served with syrup."
    },
    {
        FoodName: "Hamburger",
        foodimg: '../imagef/burger.jpg',
        price: "$ 8.00",
        type: "Lunch",
        des: "The true American staple of any eatery. Available with or without toppings and cheese."
    },
    {
        FoodName: "Fried Chicken",
        foodimg: '../imagef/chicken.png',
        price: "$ 7.00",
        type: "Lunch",
        des: "Simple, but not any less delicious. Hand breaded and freshly fried, available with a variety of dipping sauces."
    },
    {
        FoodName: "Salad",
        foodimg: '../imagef/salad.jpg',
        price: "$ 6.00",
        type: "Lunch",
        des: "A slightly healthier option if that is what you prefer. Available with ranch or other assorted dressings."
    },
    {
        FoodName: "Coffee",
        foodimg: '../imagef/coffee.jpg',
        price: "$ 5.00",
        type: "Beverages",
        des: "Freshly ground and freshly brewed. Decaf is also available, but freshness is not guaranteed"
    },

    {
        FoodName: "Iced Tea",
        foodimg: '../imagef/tea.jpeg',
        price: "$ 4.00",
        type: "Beverages",
        des: "Freshly made tea with ice. Available in lemon, peach or sweet options."
    },
    {
        FoodName: "Fountain Drink",
        foodimg: '../imagef/soda.jpeg',
        price: "$ 4.00",
        type: "Beverages",
        des: "Choose from all the classic soda options. Self serve at your own convenience"
    },

    {
        FoodName: "Coming Soon",
        foodimg: '../images/uhdining.jpeg',
        price: "$ 0.00",
        type: "Extra",
        des:"Expect more options to release and become available as time goes on and trends are set. "
    }
]
*/

function showMenu(meal) {
    fetch(`http://127.0.0.1:3000/api/menu/${meal}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(menuItems => {
        console.log('Fetched menu items:', menuItems); // Log fetched menu items
        const menucontainer = document.getElementById("menuContainer");
        menucontainer.textContent = ""; // Clear existing menu items
  
        menuItems.forEach(item => {
          // Create elements for each menu item
          const li = document.createElement("li");
  
          // Image element
          const img = document.createElement("img");
          img.src = `../imagef/${item.image}`; // Adjusted image path
          img.alt = item.name;
          img.className = "menu-item-img";
          li.appendChild(img);
  
          // Text container
          const textContainer = document.createElement("div");
          textContainer.className = "menu-item-text";
  
          // Menu name
          const nameSpan = document.createElement("span");
          nameSpan.textContent = item.name;
          nameSpan.className = "menu-item-name";
          nameSpan.style.color = "rgb(227, 113, 0)";
          nameSpan.style.fontSize = "18px";
          textContainer.appendChild(nameSpan);
  
          // Menu price
          const priceSpan = document.createElement("span");
          priceSpan.textContent = item.price;
          priceSpan.className = "menu-item-price";
          priceSpan.style.color = "GoldenRod";
          priceSpan.style.fontSize = "18px";
          textContainer.appendChild(priceSpan);
  
          // Add to cart button
          const addButton = document.createElement("button");
          addButton.textContent = "Add to Cart";
          addButton.className = "add-to-cart-button";
          addButton.onclick = function () {
            addToCart(item);
          };
          textContainer.appendChild(addButton);
  
          li.appendChild(textContainer);
  
          // Append the menu item to the menu container
          menucontainer.appendChild(li);
        });
      })
      .catch(error => {
        console.error('Error fetching menu items:', error);
      });
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    showMenu('Breakfast');
  });