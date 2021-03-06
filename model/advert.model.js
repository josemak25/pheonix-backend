const { Schema, model } = require("mongoose");

const AdvertSchema = new Schema(
  {
    price: {
      type: Number,
      required: true
    },
    userId: {
      type: Schema.Types.ObjectId,
      required: true
    },
    categoryId: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      enum: [true, false],
      required: true
    },
    dueDate: {
      type: Date,
      required: true
    },
    deleted: {
      type: Boolean,
      enum: [true, false],
      required: true
    },
    points: {
      type: Number,
      required: true
    },
    thumbNails: {
      type: [String],
      required: true
    }
  },
  { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

/**
 * pre-save hooks
 */
AdvertSchema.pre("save", next => {});

/**
 * Methods
 */
AdvertSchema.methods = {
  toJSON() {}
};

/**
 * Statics
 */
AdvertSchema.statics = {};

module.exports = model("advert", AdvertSchema);
