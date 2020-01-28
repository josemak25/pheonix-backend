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
 * pre-save hooks
 */
CategorySchema.pre("save", next => {});

/**
 * Methods
 */
CategorySchema.methods = {
  toJSON() {}
};

/**
 * Statics
 */
CategorySchema.statics = {};

module.exports = model("Category", CategorySchema);
