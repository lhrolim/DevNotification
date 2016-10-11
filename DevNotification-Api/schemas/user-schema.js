const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


const UserSchema = new Schema({
  
  username: { type: String, required: true },
  password:  { type: String, required: true },
  creation_date: {type:Date, required:true},
  
  projects:[{
  	 //has to match a ProjectSchema defined name
  	 name: {type:String, required:true},
  }],

  applications:[{
  	 //has to match a Applications defined name
  	 name: {type:String, required:true},
  }]


});

module.exports = { model: mongoose.model('User', UserSchema), schema: UserSchema }


