const express = require('express');

const app = express();

app.listen(3000, () =>{
    console.log('Listening on port 3000');
})
//Q1
app.get('/greetings/:name', (req, res)=>{
    console.log(req.params.name);
    res.send(`Hello there, ${req.params.name}!`);
  })

  //Q2
  app.get('/roll/:number', (req, res)=>{
    const number = parseInt(req.params.number);
    if(isNaN(number) || number < 1){
        res.status(404).send('Invalid number');
    }
    else {
        const randomNumber = Math.floor(Math.random()* number);
        res.send(`You rolled a ${randomNumber}`);
    }
  })

  //Q3
  app.get('/collectibles/:index', (req, res)=>{
    const collectibles = [
        { name: 'shiny ball', price: 5.95 },
        { name: 'autographed picture of a dog', price: 10 },
        { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
      ];
      const index = parseInt(req.params['index']);
      if(isNaN(index) || index < 0 || index >= collectibles.length){
        res.status(404).send('This item is not yet in stock. Check back soon!');
      }
      else{
        res.send(`So you want the ${collectibles[index].name}? For $${collectibles[index].price}`);
      }

  })     
 
  //Q4

    
  
  app.get('/shoes/:minPrice/:maxPrice/:type', (req, res)=>{

    const shoes = [
      { name: "Birkenstocks", price: 50, type: "sandal" },
      { name: "Air Jordans", price: 500, type: "sneaker" },
      { name: "Air Mahomeses", price: 501, type: "sneaker" },
      { name: "Utility Boots", price: 20, type: "boot" },
      { name: "Velcro Sandals", price: 15, type: "sandal" },
      { name: "Jet Boots", price: 1000, type: "boot" },
      { name: "Fifty-Inch Heels", price: 175, type: "heel" }
  ]; 

  const minPrice = parseInt(req.params.minPrice);
  const maxPrice = parseInt(req.params.maxPrice);
  const type = req.params.type;
 
  if(isNaN(minPrice) || isNaN(maxPrice) || minPrice < 0 || maxPrice < 0 || type === ''){
    res.status(400).send('Invalid parameters');
  }
  else {
    const filteredShoes = shoes.filter(shoe => shoe.price >= minPrice && shoe.price <= maxPrice && shoe.type === type);
    res.send(filteredShoes);
  }
  })
