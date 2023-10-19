const mongoose = require("mongoose");

const feedSchema = new mongoose.Schema(
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
    situationName: {
      type:String,
      required:true
    },
    optionName: {
      type:String,
      required:true
    },
    // The desktop html data of the CARFAX report
    feed: {
      headline:String,
      link:String,
      summary:String,
    },
  },
  {
    timestamps: true,
  }
);

feedSchema.index({ createdAt: 1 });

module.exports = mongoose.model("Feed", feedSchema);
