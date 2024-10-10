const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    nom: String,
    prenom: String,
    email: String,
    age: String,
}, {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema);

