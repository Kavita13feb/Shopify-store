const { shopifyApi,LATEST_API_VERSION,Shopify} = require("@shopify/shopify-api");
const express = require("express");
const request = require("request");
const axios = require("axios");

const getRouter = express.Router();

getRouter.get("/", (req, res) => {
  const endpoint = req.baseUrl;
  console.log(endpoint)
  axios
    .get(
      `https://${process.env.shop}/admin/api/${LATEST_API_VERSION}${endpoint}.json`,
      {
        headers: {
          "X-Shopify-Access-Token": process.env.password,
        },
      }
    )
    .then((resp) => {
      console.log(resp)
      res.send(resp.data);
  
    })
    .catch((er) => {
      console.log(er)
      res.send(er);
    });
});



module.exports = {
  getRouter,
};
