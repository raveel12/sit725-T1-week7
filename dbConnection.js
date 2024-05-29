const { MongoClient, ServerApiVersion } = require('mongodb'); 
const uri="mongodb+srv://raavi01:123456789hacked@cluster1.rpqgmrl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";
let collection;

const client = new MongoClient(uri, { 
    serverApi: { 
        version: ServerApiVersion.v1, 
        strict: true, 
        deprecationErrors: true, 
    } 
 });
 async function runDBConnection() { 
    try { 
        // Connect the client to the server (optional starting in v4.7) 
        await client.connect(); 
        collection = client.db().collection('Cat'); 
        console.log(collection); 
    } catch (ex) { 
        console.error(ex); 
    } 
 } 

 runDBConnection();

 module.exports.retrieveCollection= async function(){
    if(!collection)
    {
        await runDBConnection();
    }
    return collection;
 }
