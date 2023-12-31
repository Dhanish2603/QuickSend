const express = require("express");
const router = express.Router();
const controller = require("../controller/controller");
const upload = require("../utils/upload");
router.post("/upload", upload.single("file"), controller.uploadFile);
router.post("/files", controller.getListFiles);
module.exports = router;
