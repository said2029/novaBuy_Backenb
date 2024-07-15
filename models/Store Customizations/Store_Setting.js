const mongoose = require("mongoose");

const Setting_Schema = mongoose.Schema({
  enableCashOnDelivery: { type: Boolean, default: false },
  enableStripePayment: { type: Boolean, default: false },
  stripeKey: { type: String },
  stripeSecret: { type: String },
  enableRazorPay: { type: Boolean, default: false },
  razorPayId: { type: String },
  razorPaySecret: { type: String },
  enableGoogleLogin: { type: Boolean, default: false },
  googleClientId: { type: String },
  googleSecretKey: { type: String },
  enableGoogleAnalytics: { type: Boolean, default: false },
  googleAnalyticKey: { type: String },
  enableTawkChat: { type: Boolean, default: false },
  tawkChatPropertyId: { type: String },
  tawkChatWidgetId: { type: String },
});
const Setting_md = mongoose.model("Setting", Setting_Schema);

module.exports = Setting_md;
