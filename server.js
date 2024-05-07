 var express = require("express") 
 var app = express()
 let http = require('http').createServer(app);
 let io = require('socket.io')(http);
 
 http.listen(3000, () => { console.log('express server started'); });
 
 //socket
 io.on('connection',(socket)=>{
    console.log('a user connected'); 
    socket.on('disconnect',()=>{
        console.log('userdisconnected');
    });
    setInterval(()=>{
        socket.emit('number',parseInt(Math.random()*10));
        },1000);
});
    
    
 const { MongoClient, ServerApiVersion } = require('mongodb'); 
 
const uri= "mongodb+srv://raavi01:123456789hacked@cluster1.rpqgmrl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";
var port = process.env.port || 3000;
let collection;

app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({extended: false}));

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
app.get('/', (req, res) => { 
   res.render('index.html'); 
}); 

app.get("/api/cards", async (req, res) => {
    const result = await collection.find().toArray();
    // Print returned documents
    console.log(result);
  
    res.json({
      statusCode: 200,
      data: result,
      message: "get all cards success",});
 });
app.post("/api/cards", async (req, res) =>{
    console.log(req.body);
    const cat= {title: req.body.title, subTitle: req.body.subTitle, path: req.body.path, description: req.body.description};
    const result = await collection.insertOne(cat);
    console.log(result);
    res.json({
        statusCode: 200,
        message: "post all cats success",});

});
runDBConnection();
//  app.listen(port,()=>{
//  console.log("App listening to: "+port)
 
//  });