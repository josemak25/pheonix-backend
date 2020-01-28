const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true
    },
    converterId: {
      type: String,
      required: true
    },
    amount: {
      type: Number,
      required: true
    }
  },
  { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

schema.methods.toJSON = function() {};

module.exports = model("transaction", schema);
