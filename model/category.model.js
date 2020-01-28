const { Schema, model } = require("mongoose");

const CategorySchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    type: {
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
CategorySchema.set("toJSON", {
  virtuals: true
});

/**
 * pre-save hooks
 */
CategorySchema.pre("save", next => {});

/**
 * Methods
 */
CategorySchema.methods = {};

/**
 * Statics
 */
CategorySchema.statics = {};

module.exports = model("Category", CategorySchema);
