const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  createInventoryController,
  getInventoryController,
  getDonarsController,
  getHospitalController,
  getOrganizationController,
  getOrganizationForHospitalController,
  getInventoryHospitalController,
  getRecentInventoryController,
} = require("../controller/inventoryController");

const router = express.Router();

//routes
//ADD inventory || Post
router.post("/create-inventory", authMiddleware, createInventoryController);

//get all blood records
router.get("/get-inventory", authMiddleware, getInventoryController);

//get recent blood records
router.get(
  "/get-recent-inventory",
  authMiddleware,
  getRecentInventoryController
);

//get hospital blood records
router.post(
  "/get-inventory-hospital",
  authMiddleware,
  getInventoryHospitalController
);

//get Donar records
router.get("/get-donars", authMiddleware, getDonarsController);

//get Hospital records
router.get("/get-hospitals", authMiddleware, getHospitalController);

//get Organization records
router.get("/get-organization", authMiddleware, getOrganizationController);

//get Organization records
router.get(
  "/get-organization-for-hospital",
  authMiddleware,
  getOrganizationForHospitalController
);

module.exports = router;
