const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true
    },
    address: {
      type: String,
      required: true
    }
  },
  { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

/**
 * pre-save hooks
 */
UserSchema.pre("save", next => {});

/**
 * Methods
 */
UserSchema.methods = {
  toJSON() {}
};

/**
 * Statics
 */
UserSchema.statics = {};

module.exports = model("url", UserSchema);
