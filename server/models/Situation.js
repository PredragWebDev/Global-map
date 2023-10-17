const mongoose = require("mongoose");

const situationSchema = new mongoose.Schema(
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
  },
  {
    timestamps: true,
  }
);

situationSchema.index({ createdAt: 1 });

module.exports = mongoose.model("Situations", situationSchema);
