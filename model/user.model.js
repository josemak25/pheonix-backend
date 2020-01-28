const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      unique: true,
      required: true
    },
    avatar: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    phone: {
      type: Number,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    conversionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Conversion",
      required: true
    },
    businessType: {
      type: String,
      enum: ["Merchant", "Store", "Expatriate", "Restaurant"],
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

module.exports = model("User", UserSchema);
