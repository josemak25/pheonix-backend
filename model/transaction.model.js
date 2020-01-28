const { Schema, model } = require("mongoose");

const TransactionSchema = new Schema(
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

/**
 * pre-save hooks
 */
TransactionSchema.pre("save", next => {});

/**
 * Methods
 */
TransactionSchema.methods = {
  toJSON() {}
};

/**
 * Statics
 */
TransactionSchema.statics = {};

module.exports = model("transaction", TransactionSchema);
