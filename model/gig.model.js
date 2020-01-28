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
 * Ensure virtual fields are serialised
 */
GigSchema.set("toJSON", {
  virtuals: true
});

/**
 * pre-save hooks
 */
GigSchema.pre("save", next => {});

/**
 * Methods
 */
GigSchema.methods = {};

/**
 * Statics
 */
GigSchema.statics = {};

module.exports = model("Gig", GigSchema);
