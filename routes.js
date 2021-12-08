const router = require("express").Router();
const DataController = require("./controllers/data-controller");

// get routers
router.get("/api/get-data", DataController.getData);
router.get("/api/get-wlink", DataController.getwlink);

// post routers
router.post("/api/get-data", DataController.getData);
router.post("/api/get-wlink", DataController.getwlink);

module.exports = router;
