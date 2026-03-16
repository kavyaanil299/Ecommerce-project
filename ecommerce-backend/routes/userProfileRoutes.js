const express = require("express");

const router = express.Router();

const {
 getUserProfile,
 updateUserProfile,
 deleteUserProfile
} = require("../controllers/userProfile");

const {protect} = require("../middleware/authMiddleware");

router.get("/", protect, getUserProfile);

router.put("/", protect, updateUserProfile);

router.delete("/", protect, deleteUserProfile);

module.exports = router;