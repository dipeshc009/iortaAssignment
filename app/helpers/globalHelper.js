'use strict';

const globalHelper = {
    globalSuccessResponse: async function (finalData, text) {
        let response = {
            success: 1,
            data: finalData,
            message: text,
        };

        return response;
    },

    globalErrorResponse: function (message) {
        let response = {
            success: 0,
            errMessage: message
        };
        return response;
    },
};

module.exports = globalHelper;
