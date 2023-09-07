const Image = require("../model/Schema");
// const File = require("../model/Schema")
const fs = require("fs");
const path = require("path");
exports.uploadFile = async (req, res) => {
  try {
    const value = new Image({
      data: fs.readFileSync(__dirname + "/uploads/" + req.file.filename),
      // contentType: req.file.mimetype,
    });
    console.log(value);
    await value.save();

    res.status(201).send("File uploaded and saved to database.");
  } catch (error) {
    console.log(error);
    // res.status(500).send('An error occurred.');
  }
};

exports.showFile = async(req,res)=>{
  
}
