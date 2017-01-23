const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


const UserSchema = new Schema({
  
  /**
   * The userId shall come from auth0
   */
  userId: { type: String, required: true, index: { unique: true, internalpk: true } },
  email:{type:String, required:true, index:{unique:true}},
  creationDate: {type:Date, required:true},
    
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


