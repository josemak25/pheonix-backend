const { Schema, model } = require("mongoose");

const WalletSchema = new Schema(
  {
    userId: {
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

/**
 * pre-save hooks
 */
WalletSchema.pre("save", next => {});

/**
 * Methods
 */
WalletSchema.methods = {
  toJSON() {}
};

/**
 * Statics
 */
WalletSchema.statics = {};

module.exports = model("wallet", WalletSchema);
