const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const RestaurantSchema = new Schema (
    {
        "restaurantId": {
          "type": "Number"
        },
        "restaurantName": {
          "type": "String"
        },
        "rating": {
          "type": "Number"
        },
        "restaurantImage": {
          "type": "String"
        },
        "restaurantSpecialty": {
          "type": "String"
        },
        "streetAddress": {
          "type": "String"
        },
        "postalCode": {
          "type": "String"
        },
        "deliveryFee": {
          "type": "Number"
        },
        "deliveryTime": {
          "type": "Number"
        },
        "city": {
          "type": "String"
        },
        "province": {
          "type": "String"
        },
        "address": {
          "type": "String"
        },
        "freeDelivery": {
          "type": "Boolean"
        },
        "isCustomerFavourite": {
          "type": "Boolean"
        },
        "meal": {
          "type": [
            "Mixed"
          ]
        }
      }
)

let Restaurant = mongoose.model("Restaurant", RestaurantSchema);

module.exports = Restaurant;