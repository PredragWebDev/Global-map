const mongoose = require("mongoose");

const optionSchema = new mongoose.Schema(
  {
    // The user that requested this report
    // Not required if single report
    situationId: {
      type: mongoose.Types.ObjectId,
      required: false,
    },
    // The VIN the user requested the report for
    situationName: {
      type: String,
      required: true,
    },
    optionName: {
      type: String,
      required: false
    }
  },
  {
    timestamps: true,
  }
);

optionSchema.index({ createdAt: 1 });

module.exports = mongoose.model("Options", optionSchema);
