const app = require("express")();
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");
const db = require("./model/db");
const routes = require("./routes/routes")
dotenv.config();
const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,            //access-control-allow-credentials:true
  // optionSuccessStatus:200
}
app.use(cors(corsOptions));
// app.use(cors());
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/",routes);

app.listen(process.env.PORT, function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log("working on port " + process.env.PORT);
  }
});
