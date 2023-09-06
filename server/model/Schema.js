const mongoose = require("mongoose")
const File = mongoose.model('File', {
    filename: {
      data:Buffer,
      // required:true
    }
  }); 
module.exports = File;
  // module.exports = ImageSchema = mongoose.model(File);