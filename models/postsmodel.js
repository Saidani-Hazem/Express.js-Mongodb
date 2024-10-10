const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postsSchema = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model('post', postsSchema);