const express = require("express");
const router = express.Router();
const {
  register,
  paymentOrder,
  paymentDone,
  login,
  userData,
  logout,
  coreTeamData,
  eventData,
  singleUser
} = require("../controllers/appController");

const { verifyToken } = require("../middleware/middleware");

router.post("/register", register);
router.post("/login", login);
router.post("/paymentVerify", paymentOrder);
router.post("/payment", verifyToken, paymentDone);
router.get("/user", verifyToken, userData);
router.post("/applyEvent", singleUser);
router.get("/logout", logout);
router.get("/allcoremembers", coreTeamData);
router.get("/events",eventData);
router.get("/razor/key", (req, res) => {
  res.status(200).json({ key: process.env.RAZOR_KEY });
});

module.exports = router;
