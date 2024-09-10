const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getDonarsListController,
  getHospitalListController,
  getOrgListController,
  deleteDonarController,
} = require("../controller/adminController");
const adminMiddleware = require("../middlewares/adminMiddleware");

//router object
const router = express.Router();

//GET || DONAR LIST
router.get(
  "/donar-list",
  authMiddleware,
  adminMiddleware,
  getDonarsListController
);

//GET || Hospital LIST
router.get(
  "/hospital-list",
  authMiddleware,
  adminMiddleware,
  getHospitalListController
);

//GET || Org LIST
router.get("/org-list", authMiddleware, adminMiddleware, getOrgListController);

//-----------------------------------------------------
//Delete donar || get
router.delete(
  "/delete-donar/:id",
  authMiddleware,
  adminMiddleware,
  deleteDonarController
);

//EXPORT
module.exports = router;
