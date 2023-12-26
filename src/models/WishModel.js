//importing database
const mongoose = require("mongoose");

//creating schema(database model)
const DataSchema = mongoose.Schema(
  {
    productID: { type: mongoose.Schema.Types.ObjectId, required: true },
    userID: { type: mongoose.Schema.Types.ObjectId, required: true },
  },
  { timestamps: true, versionKey: false }
);

const WishModel = mongoose.model("wishes", DataSchema);
module.exports = WishModel;
