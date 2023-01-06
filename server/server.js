const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs')

const app = express();
const port = 3000;

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/product', (req, res) => {
    const product = req.body;
    console.log(product)

    fs.readFile('../dist/products.json', 'utf8', async function readFileCallback(err, data){
      obj = JSON.parse(data); //now it an object

      fs.writeFile(`../dist/${product.slug}.html`, `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${product.name}</title>
        <link rel="stylesheet" href="./assets/global.css">
        <link rel="stylesheet" href="./assets/product.css">
      </head>
      <body>
        <section>
          <img id="bg" src="./assets/bg.jfif" alt="">
          <div id="shop">
            <div class="product">
              <div class="img-wrapper">
                <img src="${product.image[0]}" alt="${product.name}">
              </div>
              <div class="data">
                <a href="affiliateLink">
                  <h2>${product.name}</h2>
                </a>
                <p class="platform">From: source</p>
                <p class="price">offers.price</p>
                <p class="delivery">shippingDetails.shippingRate.value</p>
                <div class="available-in">
                  <p>Shipping available to: </p>
                  <img src="./assets/icons/shippingDetails.shippingDestination.addressCountry.png" alt="shippingDetails.shippingDestination.addressCountry">
                </div>
                <div class="rating">
                  '⭐⭐⭐⭐⭐⚝⚝⚝⚝⚝'.slice(5 - aggregateRating.ratingValue, 10 - aggregateRating.ratingValue)
                </div>
                <p class="description">description</p>
              </div>
            </div>
          </div>
        </section>
      
        <script src="./assets/script.js" defer></script>
      </body>
      </html>      
      `, function (err) {
        if (err) console.log('err: ' + err)
      })
      
      obj.push(product); //add some data
      json = JSON.stringify(obj); //convert it back to json
      fs.writeFile('products.json', json, 'utf8', (data) => console.log(data)); // write it back 
      res.writeHead(200, { "Content-Type": "application/json" });
      //send the todo
      res.end(JSON.stringify(product));
    });

    // res.send('Book is added to the database');
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));

