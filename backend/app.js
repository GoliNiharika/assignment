const path = require("path");
const express=require('express');
const bodyParser = require('body-parser');

const app=express();
app.use(bodyParser.json());


const postsRoutes = require("./routes/posts");

const mongoose  = require('mongoose');
const { throwError } = require('rxjs');

mongoose.connect("mongodb+srv://niharika:niharika@cluster0.kgqdx.mongodb.net/node-angular?retryWrites=true&w=majority",
{ useUnifiedTopology: true , useNewUrlParser: true, useCreateIndex: true  })
.then(() => {
  console.log("connected to database");
})
.catch(() => {
  console.log("connection failed");
});

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, content-type, Authorization, text/html, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});
app.use("/api/posts",postsRoutes);
module.exports = app;
