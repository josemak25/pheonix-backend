const { Schema, model } = require("mongoose");

const schema = new Schema(
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

schema.methods.toJSON = function() {};

module.exports = model("url", schema);
