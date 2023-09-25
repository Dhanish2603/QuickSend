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
    console.log(req.file);
    // console.log(value);
    const response = await value.save();

    res.status(201).json({ id: response._id });
  } catch (error) {
    console.log(error);
    // res.status(500).send('An error occurred.');
  }
};

exports.getListFiles = async (req, res) => {
  const ans = await Image.findById("65072b7f5877c38cf23014ba");
  console.log(ans.data);
  // const value = ans.data+".png"
  res.contentType("image/png");
  res.send(ans.data);
};
