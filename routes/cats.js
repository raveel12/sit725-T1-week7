var express = require("express");
const CatController = require("../controllers/catsController");

const router = express.Router();

router.get("/", CatController.retrieveAllCats);

router.post("/", CatController.postCat);

module.exports = router;
