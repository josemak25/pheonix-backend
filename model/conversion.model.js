const { Schema, model } = require("mongoose");

const ConversionSchema = new Schema(
  {
    amount: {
      type: String,
      required: true
    },
    unit: {
      type: String,
      unique: true,
      required: true
    }
  },
  { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

/**
 * Ensure virtual fields are serialised
 */
ConversionSchema.set("toJSON", {
  virtuals: true
});

/**
 * pre-save hooks
 */
ConversionSchema.pre("save", next => {});

/**
 * Methods
 */
ConversionSchema.methods = {};

/**
 * Statics
 */
ConversionSchema.statics = {};

module.exports = model("Conversion", ConversionSchema);
