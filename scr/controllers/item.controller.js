"use strict";

const itemModel = require("../models/item.models");

const getItem = (request, respond) => {
  itemModel.find(
     {},
    (error, itemData) => {
      respond.json(itemData);
    }
  );
};
const getOneItem = (request, respond) => {
    itemModel.find(
       {productName:request.params.productName},
      (error, itemData) => {
        respond.json(itemData);
      }
    );
  };
const createItem = (request, response) => {
  const { productName, specfications, quantity, brand, unit } = request.body;

  const newItem = new itemModel({
    productName,
    specfications,
    quantity,
    brand,
    unit,
  });

  newItem.save();

  response.json(newItem);
};


const updateItem = (request, response) => {
  const {
    productName,
    specfications,
    quantity,
    brand,
    unit,
  } = request.body;
  const itemId = request.params.Item_id;

  itemModel.findByIdAndUpdate(
    { _id: itemId },
    {
        productName,
        specfications,
        quantity,
        brand,
        unit,
      },    { new: true },
    (error, updateItem) => {
      response.json(updateItem);
    }
  );
};

module.exports = {
  getItem,
  createItem,
  updateItem,
  getOneItem
};
