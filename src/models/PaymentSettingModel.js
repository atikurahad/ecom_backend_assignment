//importing database
const mongoose = require("mongoose");

//creating schema(database model)
const DataSchema = mongoose.Schema(
  {
    store_id: { type: mongoose.Schema.Types.ObjectId, required: true },
    store_passwd: { type: String, required: true },
    currency: { type: String, required: true },
    success_url: { type: String, required: true },
    fail_url: { type: String, required: true },
    cancel_url: { type: String, required: true },
    ipn_url: { type: String, required: true },
    init_url: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

const PaymentSettingModel = mongoose.model("paymentsettings", DataSchema);
module.exports = PaymentSettingModel;
