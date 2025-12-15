const express = require("express");
const router = express.Router();
const { getSlots } = require("../controllers/slotcontroller");

// GET all slots
router.get("/slots", getSlots);

module.exports = router;
