const axios = require("axios");
const { API_URL } = require("./values");

function headersF() {
    return {
        "Content-Type": "application/json",
    };
}

//Response-Type :restful
exports.translate = function (text, lng) {

    let data = JSON.stringify({
        q: text,
        source: lng === true ? "en" : "es",
        target: lng === true ? "es" : "en"
    })


    return new Promise((resolve) => {
        axios.post(`https://translate.argosopentech.com/translate`, data, { headers: headersF() })
            .then(function (params) {
                console.log("params 2", params)
                resolve(params.data);
            });
    });
};
