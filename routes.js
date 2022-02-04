const router = require("express").Router();
const DataController = require("./controllers/data-controller");

// get routers
router.get("/api/get-data", DataController.getData);

// post routers
router.post("/api/post/get-data", DataController.getDataPost);
router.post("/api/post/get-wlink", DataController.getwlinkPost);

module.exports = router;
