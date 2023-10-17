const mongoose = require("mongoose");

const mapSchema = new mongoose.Schema(
  {
    // The user that requested this report
    // Not required if single report
    countryId: {
      type: mongoose.Types.ObjectId,
      required: false,
    },
    // The VIN the user requested the report for
    countryName: {
      type: String,
      required: true,
    },
    countryCode: {
      type:String,
      required: true
    },
    // The year make model of the VIN the report is for
    situation: {
      type:String,
      required:false
    },
    // The desktop html data of the CARFAX report
    stance: {
      type:String,
      require:false
    },
    
   
  },
  {
    timestamps: true,
  }
);

mapSchema.index({ createdAt: 1 });

module.exports = mongoose.model("Countries", mapSchema);
