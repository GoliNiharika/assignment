const express = require("express");

const router = express.Router();

const Post=require('../models/post');



 router.get("/:id",(req,res,next) => {
   Post.findById(req.params.id).then(post => {
     if (post) {
       res.status(200).json(post);
     } else {
       res.status(404).json({message: 'Post not found'});
     }
   });
 });


router.put("/:id",(req,res,next) => {
  console.log(req.params.id);
  const post = new Post({
    _id: req.body.id,
    title: req.body.title,
    content: req.body.content
  });
  console.log(post);
  Post.updateOne({_id: req.params.id},post).then(result => {
    console.log(result);
    res.status(200).json(result);
  });
  console.log(post);
});

router.get("", (req, res, next) => {

  Post.find().then(posts => {
    res.status(200).json({
      message: "Posts fetched successfully!",
      posts: posts
    });
  });
});

module.exports =router;
