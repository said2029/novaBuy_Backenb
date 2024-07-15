const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SettingSchema = new Schema({
  numberOfImages: { type: Number, default: 0 },
  defaultCurrency: { type: String },
  defaultTimeZone: { type: String },
  defaultDateFormat: { type: String },
  receiptSizeWidth: { type: Number },
  shopName: { type: String },
  companyName: { type: String },
  vatNumber: { type: String },
  address: { type: String },
  postCode: { type: String },
  contactEmail: { type: String },
  website: { type: String },
});

const globle_setting_md= mongoose.model('setting', SettingSchema)

module.exports = globle_setting_md;