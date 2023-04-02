const express=require("express");
const { getDepart, updateDepart, delDepart, addDepart } = require("../controllers/departmentController");
const router= express.Router();


router.post("/add", addDepart);

router.get("/get", getDepart)

router.put("/update", updateDepart)

router.delete("/del", delDepart)


module.exports = router;