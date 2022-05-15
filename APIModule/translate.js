const axios = require("axios");
const { API_URL } = require("./values");

function headersF() {
    return {
        "Content-Type": "application/json",
    };
}

//Response-Type :restful
exports.translate = function (text, lng1, lng2) {


    let data = {
        q: "selam",
        source: lng1,
        target: lng2,
        format: "text",
        api_key: "xxxxxxxx - xxxx - xxxx - xxxx - xxxxxxxxxxxx"
    }


    return new Promise((resolve) => {
        axios
            .post(`${API_URL}`, data, { headers: headersF() })
            .then(function (params) {
                console.log("params 2", params)
                resolve(params.data);
            });
    });
};
