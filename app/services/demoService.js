'use strict';

const fs = require('fs');
const path = require('path');
const Files = require('../models/Files');
const Products = require('../models/produts');
const {
    response
} = require('express');

var service = {

    getFiles: async function () {
        let filePath = path.join(__dirname, '../../files');
        let images = fs.readdirSync(filePath); // to get all the images from files folder

        let promise = [];

        for (let imageName of images) {
            promise.push(this.saveFiles(imageName)); // to store the files name to into collection

            fs.unlinkSync(`${filePath}/${imageName}`); // to remove image from folder after storing it into DB.
        }

        return Promise.all(promise)
    },

    saveFiles: async function (imageName) {
        try {

            let fileInfo = {
                imageName: imageName
            }

            let newFile = new Files(fileInfo);
            let response = await newFile.save();
            return response;
        } catch (error) {
            throw error;
        }
    },

    getReportOne: async function () {
        try {
            let response = await Products
                .find({
                    $and: [{
                        color: {
                            $in: ["red", "blue"]
                        }
                    }, {
                        size: {
                            $in: ["10", "20"]
                        }
                    }]
                })
            return response;
        } catch (error) {
            throw error;
        }
    },

    getReportTwo: async function () {
        try {
            let response = await Products
                .aggregate([{
                    $group: {
                        "_id": "$category",
                        price: {
                            $max: "$price"
                        }
                    }
                }])
            return response;
        } catch (error) {
            throw error;
        }
    },

    getReportThree: async function (n) {
        try {

            let priceArr = await Products.distinct("price") // getting unique price values
            priceArr.sort((a, b) => a - b); //sorting array values

            let response = await Products
                .find({
                    price: priceArr[priceArr.length - n] // to fetch nth price value data
                }).sort({
                    "price": -1
                })
            return response;
        } catch (error) {
            throw error;
        }
    },
}

module.exports = service;