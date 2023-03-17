const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const instanceSchema = new Schema({
    instance: {
      type: String,
      required: true
    }
    
  });

  module.exports= mongoose.model('instanceSchema', instanceSchema);