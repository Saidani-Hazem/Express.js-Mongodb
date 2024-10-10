const postsmodel = require("../models/postsmodel");




const store = async (req, res) => {
  const post = new postsmodel(req.body);

  try {
    await post.save();
    res.json({ msg: "post added" });
  } catch (error) {
    res.json({ err: error });
  }
};

const index = async(req,res)=>{
    
const posts = await postsmodel.find({});

try {
   res.json({posts : posts});
} catch (error) {
  res.json({err:error})
}}


module.exports = {
    store,
    index
}