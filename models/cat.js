const { retrieveCollection } = require("../dbConnection");

let collection;
retrieveCollection().then((res) => (collection = res));

async function getAllCats() {
  try {
    const result = await collection.find().toArray();
    console.log(result);
    return result;
  } catch (ex) {
    console.error(ex);
    throw ex;
  }
}
async function addCat(formData) {
  try {
    const cat = {
      title: formData.title,
      subTitle: formData.subTitle,
      path: formData.path,
      description: formData.description,
    };
    const result = await collection.insertOne(cat);
    console.log(result);
  } catch (ex) {
    console.error(ex);
    throw ex;
  }
}

module.exports = {
  getAllCats,
  addCat,
};
