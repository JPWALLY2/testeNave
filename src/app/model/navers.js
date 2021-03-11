const mongoose = require("mongoose");
const autoincrement  = require ("simple-mongoose-autoincrement") ; 
const Schema = mongoose.Schema;

const Naver = new Schema(

  {
    name: {
      type: String,
      required: true
    },
    birthdate:{
        type: String,
        required: true,
        validate: [/^\d{4}-\d{2}-\d{2}$/]
    },
    admission_date:{
        type: String,
        required: true,
        validate: [/^\d{4}-\d{2}-\d{2}$/]
    },
    job_role: {
      type: String,
      required: true
    },
    projects: [{
        ref: 'projects',
        type: Number,
        required: true
    }],
    users:{
      type: Number,
      ref:'users'
    }
  },
);


Naver.plugin(autoincrement, {field: 'id'});
module.exports = mongoose.model("navers", Naver);