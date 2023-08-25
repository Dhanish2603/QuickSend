const app = require("express")();
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");
const db = require("./model/db");
const routes = require("./routes/routes")
dotenv.config();

app.use(cors());
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/",routes);

app.listen(process.env.PORT, function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log("working on port " + process.env.PORT);
  }
});
