const express = require("express"); 
const mongoose = require("mongoose");
const app = express(); 
const bodyParser = require("body-parser");
require ('dotenv/config');

//import routes
const postsRoutes = require('../mongo/routes/post');


app.use(bodyParser.json());

app.use('/posts', postsRoutes);
// app.use('/user', userRoute);

//Routes
app.get("/", (req, res) => {
  res.send("we are on home");
});

// app.get("/posts", (req, res) => {
//   res.send("we are on posts");
// });

mongoose.connect(
    process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected to DB")
);

//How to listen to server
app.listen(4000);
