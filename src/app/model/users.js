const mongoose = require("mongoose");
const autoincrement  = require ("simple-mongoose-autoincrement") ; 
const Schema = mongoose.Schema;

const User = new Schema(
  {
    email: {
      type: String,
      require: true
    },
    password: {
      type: String,
      require: true,
      select: false
    },
  }
)
User.plugin(autoincrement, {field: 'id'});
module.exports = mongoose.model("Users", User);