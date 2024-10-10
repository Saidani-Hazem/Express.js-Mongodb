const Usermo = require("../models/Usermodel");

const store = async (req, res) => {
  const user = new Usermo(req.body);
  try {
    await user.save();
    res.status(200).json({ msg: "added" });
  } catch (error) {
    res.status(500).json({ err: error });
  }
};

const index = async (req, res) => {
  try {
    const users = await Usermo.find({});

    if(!users){
      return res.status(404).json({ error: "not found" });
    }

    res.status(200).json({ users: users });
  } catch (error) {
    res.status(500).json({ err: error });
  }
};

const show = async (req, res) => {
  try {
    const user = await Usermo.find({ _id: req.params.id });
    if (!user) {
      return res.status(404).json({ error: "not found" });
    }
    res.status(200).json({ user: user });
  } catch (error) {
    res.status(500).json({ err: error });
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
      return res.status(404).json({ error: "not found" });
    }
    res.status(200).json({ msj: "updated", user });
  } catch (error) {
    res.status(500).json({ err: error });
  }
};

const deleteuser = async (req, res) => {
  try {
    await Usermo.deleteOne({ _id: req.params.id });
    res.status(201).send("deleted");
  } catch (error) {
    res.status(404).send("not found");
  }
};

module.exports = {
  store,
  index,
  show,
  update,
  deleteuser,
};
