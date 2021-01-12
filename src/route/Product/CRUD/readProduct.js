const Joi = require("joi");

// const Product = require("../../../model/Product");
const serviceReadByID = require("../../../services/Product/read/idRead");
const serviceReadAll = require("../../../services/Product/read/allRead");
async function readProduct(req, res) {
  // const a = req.param("asdasd")
  const paramArrayID = req.query.id; // req.body

  if (paramArrayID) {
    const arrayID = JSON.parse(req.query.id);
    serviceReadByID(arrayID, req, res);
  } else {
    serviceReadAll(req, res);
  }
}


//
module.exports = readProduct;
