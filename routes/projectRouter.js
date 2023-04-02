const express=require("express");
const { addProject, getProject, updateProject, delProject} = require("../controllers/projectController");
const router= express.Router();


router.post("/add", addProject);

router.get("/get", getProject)

router.put("/update", updateProject)

router.delete("/del", delProject)


module.exports = router;