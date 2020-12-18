'use strict';
const demoService = require('../services/demoService');
const GlobalService = require('../helpers/globalHelper');
const {
    response
} = require('express');

var controller = {

    saveFiles: async function (req, res) {
        demoService.getFiles() // to fetch the files from files folder
            .then(async getData => {
                let response = await GlobalService.globalSuccessResponse(getData);
                res.send(response);
            })
            .catch(async error => {
                let response = await GlobalService.globalErrorResponse(error.message);
                res.send(response);
            })
    },

    generateReport: async function (req, res) {
        try {
            let n = req.body.nthHighest; //1;

            let reportOne = await demoService.getReportOne(); //Search products by color [red, blue] and size [10,20]

            let reportTwo = await demoService.getReportTwo(); //Find the highest priced product in each category

            let reportThree = await demoService.getReportThree(n); //Nth highest price products list

            let response = await GlobalService.globalSuccessResponse({
                colorAndSizeWiseData: reportOne,
                catWiseHighestPrice: reportTwo,
                highestPrice: reportThree
            });
            res.send(response);
        } catch (error) {
            let response = await GlobalService.globalErrorResponse(error.message);
            res.send(response);
        }
    }
}

module.exports = controller;