const router = require("express").Router();

const MainController = require("./controller/MainController")


router.get("/home", MainController.getHome );

router.get("/season", MainController.getSeason );

router.get("/shop", MainController.getShop );


  
module.exports = router;