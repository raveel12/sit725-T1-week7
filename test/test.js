const expect = require("fix-esm").require("chai").expect;
var request = require("request");
var url = "http://localhost:3000/";
describe("Testing for adding cats in mongodb", function () {
  it("should return status 200 for GET", function (done) {
    var url2 = url + "api/cats";
    request.get(url2, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it("returns statusCode key in body to check if api give right result should be 200", function (done) {
    var url2 = url + "api/cats";
    request.get(url2, function (error, response, body) {
      body = JSON.parse(body);
      expect(body.statusCode).to.equal(200);
      done();
    });
  });

  it("returns array of cats", function (done) {
    var url2 = url + "api/cats";
    request.get(url2, function (error, response, body) {
      body = JSON.parse(body);
      expect(body.data).to.be.an("array");
      done();
    });
  });

  it("should return status 200 for succesful POST request", function (done) {
    const cat = {
      title: "Cat title",
      path: "placeholder/url",
      description: "Some cute description for a cat",
      subTitle: "A subtitle",
    };
    var url2 = url + "api/cats";

    request.post(
      url2,
      { body: JSON.stringify(cat) },
      function (error, response, body) {
        body = JSON.parse(body);
        expect(body.statusCode).to.equal(200);
        done();
      }
    );
  });
});
