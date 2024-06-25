const { home }   = require("../data/home");
const { season } = require("../data/season");
const { shop }   = require("../data/shop");

function responseJson(response, data){

    return response.status(200).json(
        {
            success : true,
            message : 'success',
            data : data
        }
    );
    
}

module.exports = {

    getHome : (req, res) => {
        return responseJson(res, home);       
    },

    getSeason : (req, res) => {
        return responseJson(res, season);
    },

    getShop : (req, res) => {
        return responseJson(res, shop);
    }

};
