// const file = require("../model/Schema");


exports.uploadFile = async (req,res)=>{
    try {
      console.log(req)
        const data = new File({ filename: req.file.filename });
        console.log("hello")
        await file.save();
        res.status(201).send('File uploaded and saved to database.');
      } catch (error) {
        res.status(500).send('An error occurred.');
      }
}