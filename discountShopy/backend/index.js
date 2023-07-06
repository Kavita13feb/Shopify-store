// import "@shopify/shopify-api/adapters/node";

const { shopifyApi, LATEST_API_VERSION, Shopify } =require("@shopify/shopify-api") ;
const express = require("express");
const request = require("request");
const axios =require( "axios");
const dotenv =require('dotenv')
const {getRouter} =require("./Routes/getRoute.js" )
const app = express();
app.use(express.json());                        
dotenv.config()



app.use("/orders",getRouter)

app.use("/products",getRouter )
 
app.use("/customers",getRouter )

app.use("/collects",getRouter)


// /admin/api/2023-04/collections/841564295/products.json

app.listen(8080, () => {
  console.log("running");
});
