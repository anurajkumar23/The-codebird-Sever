const Razorpay = require("razorpay");

const instance = new Razorpay({
  key_id: "rzp_test_8oySKX9rIGczSe",
  key_secret: process.env.RAZOR_SEC,
});

module.exports = instance;