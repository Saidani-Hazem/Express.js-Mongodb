const postsmodel = require("../models/postsmodel");

const store = async (req, res) => {
  const post = new postsmodel(req.body);
  try {
    await post.save();
    res.status(200).json({ msg: "post added" });
  } catch (error) {
    res.status(500).json({ err: error });
  }
};

const show = async (req, res) => {
  try {
    const post = await postsmodel.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ error: "not found" });
    }
    res.status(200).json({ post: post });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const index = async (req, res) => {
  const posts = await postsmodel.find({});
  try {
    res.status(200).json({ posts: posts });
  } catch (error) {
    res.status(404).json({ err: error });
  }
};

const postdelete = async (req, res) => {
  try {
    await postsmodel.deleteOne({ _id: req.params.id });
    res.status(200).json({ msg: "post deleted" });
  } catch (error) {
    res.status(500).json({ err: error });
  }
};

const update = async (req, res) => {
  try {
    const post = await postsmodel.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.status(200).json({ msj: "updated", post });
  } catch (error) {
    res.status(500).json({ err: error });
  }
};

module.exports = {
  store,
  index,
  postdelete,
  show,
  update,
};
