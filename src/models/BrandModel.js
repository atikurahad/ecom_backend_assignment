

//importing database
const mongoose = require("mongoose");

//creating schema(database model)
const DataSchema = mongoose.Schema({

    brandName : {type:String , required:true},
    brandImg :{type:String , required:true}

},{ timestamps:true , versionKey:false });

const BrandModel = mongoose.model("brands" , DataSchema  );
module.exports = BrandModel;