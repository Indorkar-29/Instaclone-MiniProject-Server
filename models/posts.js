const mongoose=require('mongoose');

const postSchema=new mongoose.Schema({
    name:String,
    location:String,
    likes:{type:String,default:0},
    description:String,
    PostImage:{type:String},
    date:{type:String,default:new Date().toLocaleDateString()}
});

const Post=mongoose.model("Posts",postSchema);
module.exports=Post;