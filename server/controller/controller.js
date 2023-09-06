const image = require("../model/Schema");
// const File = require("../model/Schema")
 const fs = require("fs")
 const path = require("path");
exports.uploadFile = async (req,res)=>{
    try {
      // console.log(req.file)
      // const value  =fs.readFileSync("uploads/"+req.file.filename)  
      // console.log()
        const data = new image({ filename: fs.readFileSync("./"+path.join("./uploads",req.file.filename))});
        console.log(data)  

        // await data.save().then(res=>{
        //   console.log(res)
        // }).catch(err=>{
        //   console.log(err)
        // });
        res.status(201).send('File uploaded and saved to database.');
      } catch (error) {
        res.status(500).send('An error occurred.');
      }
} 