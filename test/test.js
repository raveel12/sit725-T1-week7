const expect = require("fix-esm").require("chai").expect; 
var request = require("request");
var url= "http://localhost:3000/";
describe("Testing for adding cats in mongodb", function(){
    
    it("should return status 200 for GET", function(done){
        var url2= url + "api/cards";
        request(url2, function(error, response, body) {
            expect(response.statusCode).to.equal(200); 
           done();
        });   
    });

    it("returns statusCode key in body to check if api give right result should be 200", function(done){
        var url2= url + "api/cards";
        request(url2, function(error, response, body) {
            body= JSON.parse(body);
            expect(body.statusCode).to.equal(200); 
           done();
        });   
    });

    it("returns array of cards", function(done){
        var url2= url + "api/cards";
        request(url2, function(error, response, body) {
            body= JSON.parse(body);
            expect(body.data).to.be.an("array"); 
           done();
        });   
    });

    
});