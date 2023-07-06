import express from "express";
import request from "request";
import axios from "axios";
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;
const WEBHOOK_URL = 'https://shopbag.onrender.com/'; // Replace with your desired URL

// Middleware to parse JSON requests
app.use(express.json());

// Endpoint to receive the Shopify webhook notifications
app.post('/', (req, res) => {
  // Forward the request to the desired URL
  console.log(req.body)
 
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
