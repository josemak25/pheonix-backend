const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    price: {
      type: Number,
      required: true
    },
    user_id: {
      type: Schema.Types.ObjectId,
      required: true
    },
    category_id: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      enum: [true, false],
      required: true
    },
    due_date: {
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
    thumbnails: {
      type: [String],
      required: true
    }
  },
  { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

schema.methods.toJSON = function() {};

module.exports = model("advert", schema);
