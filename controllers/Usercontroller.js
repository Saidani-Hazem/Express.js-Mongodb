const Usermo = require("../models/Usermodel");

const store = async (req, res) => {
  const user = new Usermo(req.body);
  
  try {
    await user.save();
    res.json({ msg: "added" });
  } catch (error) {
    res.json({ err: error });
  }
};


const index = async (req, res) => {
  try {
    const users = await Usermo.find({});
    res.json({ users: users });
  } catch (error) {
    res.json({ err: error });
  }
};


const show = async (req, res) => {
  try {
    const user = await Usermo.find({ _id: req.params.id });
    res.json({ user: user });
  } catch (error) {
    res.json({ err: error });
  }
};


const update = async (req, res) => {
  try {
    const user = await Usermo.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );
    if (!user) {
      res.status(404).send("not found");
    }
    res.status(200).send("updated");
  } catch (error) {
    res.status(500).send(error);
  }};


const deleteuser = async(req,res)=>{
    try {
        await Usermo.deleteOne({_id: req.params.id});
        res.status(201).send("deleted")
    } catch (error) {
        res.status(404).send("not found")
    }
}

module.exports = {
  store,
  index,
  show,
  update,
  deleteuser
};