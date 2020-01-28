const { Schema, model } = require("mongoose");

const GigSchema = new Schema(
  {
    title: {
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
GigSchema.pre("save", next => {});

/**
 * Methods
 */
GigSchema.methods = {
  toJSON() {}
};

/**
 * Statics
 */
GigSchema.statics = {};

module.exports = model("Gig", GigSchema);
