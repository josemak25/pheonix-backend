const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      required: true
    },
    unit: {
      type: Number,
      required: true
    }
  },
  { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

schema.methods.toJSON = function() {};

module.exports = model("wallet", schema);
