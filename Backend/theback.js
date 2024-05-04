const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

const menuItems = {
    Breakfast:[
        { name: "Yogurt Parfait", price: "$4.00", image: "../imagef/yogurt.jpg", id: 1},
        { name: "Pancakes", price: "$8.00", image: "../imagef/pancake.png", id: 2 }, 
        { name: "Waffles", price: "$7.00", image: "../imagef/waffle.png", id: 3}, 
    ], 
    Lunch: [
        { name: "Traditional Burger", price: "$8.00", image: "../imagef/burger.jpg", id: 4},
        { name: "Classic Fried Chicken", price: "$7.00", image: "../imagef/chicken.png", id: 5},
        { name: "The Salad", price: "$7.00", image:"../imagef/salad.jpg", id: 6},
    ],
    Beverages: [
        { name: "Coffee", price: "$4.00", image: "../imagef/coffee.jpg", id: 7},
        { name: "Iced Tea", price: "$4.00", image: "../imagef/tea.jpeg", id: 8}, 
        { name: "Fountain Drink", price: "$5.00", image: "../imagef/soda.jpeg", id: 9}, 

    ],
}; 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, 'Frontend', 'HTML')));

app.use(cors());


app.get('/api/menu/:meal', (req, res) => {
    const meal = req.params.meal;
  
    // Check if the meal category exists in the menuItems object
    if (menuItems.hasOwnProperty(meal)) {
      // Send the menu items as a JSON response
      res.json(menuItems[meal]);
    } else {
      // If the meal category does not exist, return a 404 error
      res.status(404).json({ error: "Meal category not found" });
    }
});

app.post('/process-order', (req, res) => {
    const { items } = req.body;
  
    // Validate the form data
    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: "No items provided in the order" });
    }
  
    let totalAmount = 0;
  
    // Calculate the total amount
    items.forEach(item => {
      if (!item.id || !item.quantity || item.quantity <= 0) {
        return res.status(400).json({ error: "Invalid item data" });
      }
  
      const menuItem = menuItems[item.category].find(menuItem => menuItem.id === item.id);
      if (!menuItem) {
        return res.status(404).json({ error: `Item not found in category ${item.category}` });
      }
  
      totalAmount += menuItem.price * item.quantity;
    });
  
    // Send a redirect response
    res.redirect('/confirmation');
  });

  app.get('/confirmation', (req, res) => {
    res.sendFile(path.join(__dirname, 'Frontend', 'HTML', 'confirmation.html'));
  });
  
  // Start the Express server
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  