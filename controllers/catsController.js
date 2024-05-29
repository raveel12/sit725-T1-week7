const CatModel = require("../models/cat");

const retrieveAllCats = async (req, res) => {
  const result = await CatModel.getAllCats();
  // Print returned documents
  console.log(result);

  res.json({
    statusCode: 200,
    data: result,
    message: "get all cats success",
  });
};

const postCat = async (req, res) => {
  await CatModel.addCat(req.body);
  res.json({
    statusCode: 200,
    message: "post a cat success",
  });
};

module.exports = {
  retrieveAllCats,
  postCat,
};
