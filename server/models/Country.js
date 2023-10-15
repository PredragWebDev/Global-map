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
    // The year make model of the VIN the report is for
    setting: {
      Leans:String,
      Solution:String,
      Ceasefire:Boolean,
      Right_to_defend:Boolean,
      Military_Aid:Boolean,
      Humanitarian_Aid:Boolean,
      Condemns_Israel:Boolean,
      Main_Religion:String,
    },
    // The desktop html data of the CARFAX report
    situation: {
      Leans:String,
      Solution:String,
      Ceasefire:String,
      Right_to_defend:String,
      Military_Aid:String,
      Humanitarian_Aid:String,
      Condemns_Israel:String,
    },
    // Leans: {
    //   type: String,
    //   required:false,
    // },
    // Solution: {
    //   type:String,
    //   required:false
    // },
    // Ceasefire: {
    //   type:String,
    //   required:false
    // },
    // Right_to_defend: {
    //   type:String,
    //   required:false
    // },
    // Military_Aid: {
    //   type:String,
    //   required:false
    // },
    // Humanitarian_Aid: {
    //   type:String,
    //   required:false
    // },
    // American_Contemns_Israel: {
    //   type:String,
    //   required:false
    // },
    
    // // The mobile html data of the CARFAX report
    // mobileReportHtml: {
    //   type: String,
    //   required: true,
    // },
    // Deprecated old html for just desktop version
  },
  {
    timestamps: true,
  }
);

mapSchema.index({ createdAt: 1 });

module.exports = mongoose.model("Countries", mapSchema);
