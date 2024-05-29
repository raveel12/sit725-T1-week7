var express = require("express");
var app = express();
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

const catsRouter = require("./routes/cats");
var port = process.env.port || 3000;



app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/cats", catsRouter);

// app.listen(port, () => {
//   console.log("App listening to: " + port);
// });
