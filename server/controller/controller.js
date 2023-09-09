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

exports.getListFiles = async (req, res) => {
  const id = "64f84492cdd9a2b27a576d90";
  const ans = await Image.findById("64fc1322d3d577382c7abf1b")
  console.log(ans)
  // res.contentType("image/jpg");
  res.send(ans.data);
}