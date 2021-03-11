const mongoose = require("mongoose");
const autoincrement  = require ("simple-mongoose-autoincrement") ; 
const Schema = mongoose.Schema;

const Project = new Schema(
  {
    name: {
      type: String,
      require: true
    },
    navers: [{
      ref: 'navers',
      type: Number,
      require: true
    }],
    users:{
      type: Number,
      ref:'users'
    }
  },
);


Project.plugin(autoincrement, {field: 'id'});
module.exports = mongoose.model("projects", Project);