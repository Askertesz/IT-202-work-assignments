const e = require('express');
const express = require('express');
const app = express();
const path = require('path')
const PORT = process.env.PORT || 3000;

app.use(express.json()); 
app.use(express.static(path.join(__dirname, 'shopping-api')));
app.use(express.urlencoded({ extended: true }));

let lastSelectedItem = null;

// A simple GET route for the homepage
app.get('/', (req, res) => {
  res.send('Hello World! This is a simple API response.');
});



//create the items that I want loaded into the API


let items = [
  { name: 'Pain Cube', image: 'http://localhost:3000/images/PainCube.jpg', description: 'If you dont have enough pain in your life, this item is for you!', price: 19.99 },
  { name: 'Permanent Paper', image: 'http://localhost:3000/images/PermanentPaper.jpg', description: 'Are you tired of being able to erase marks on your paper? Look no further, all marks on this paper are permanent!', price: 29.99 },
  { name: 'Stressed Ball', image: 'http://localhost:3000/images/StressedBall.jpg', description: 'Tired of using a normal stress ball? This ball gets stressed for you, that way you seem much less stressed in comparison.', price: 39.99 },
  { name: 'BoardKey', image: 'http://localhost:3000/images/BoardKey.jpg', description: 'Ever wonder what the opposite of a keyboard is?', price: 49.99 },
  { name: 'Box Creature', image: 'http://localhost:3000/images/BoxCreature.jpg', description: 'This creature resides exclusively in boxes, but be careful, it also relieves itself in boxes', price: 59.99 }
];

app.get('/api/items', (req, res) => {
  res.json(items); // Responds with JSON data
});

app.post('/api/order', (req, res) => {
  const orderedItem = req.body;
  console.log('Order Received:', orderedItem.name);
  lastSelectedItem = orderedItem;


  
  res.status(200).json({ 
    message: `Order for ${orderedItem.name} received successfully!`,
    item: orderedItem
  });
});

app.get('/api/last-order', (req, res) => {
    if(lastSelectedItem){
        res.status(200).json(lastSelectedItem);
    }
    else{
        res.status(404).json({ message: 'No recent order found.'});
    }
});

app.post('/api/submit-order', (req, res) => {
    const finalOrder = req.body;
    console.log('Finalizing order for:', finalOrder.name);

    res.status(200).json({
        message: 'Your order will be delivered soon', 
        itemName: finalOrder.name
    });
});
// Start the server and listen on the defined port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});