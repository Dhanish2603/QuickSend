const mongoose = require("mongoose")
const File = mongoose.model('File', {
    filename: String,
  });

  module.exports = File;