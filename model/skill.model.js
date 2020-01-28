const { Schema, model } = require("mongoose");

const SkillSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true
    },
    gigTitle: {
      type: String,
      required: true
    }
  },
  { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

/**
 * pre-save hooks
 */
SkillSchema.pre("save", next => {});

/**
 * Methods
 */
SkillSchema.methods = {
  toJSON() {}
};

/**
 * Statics
 */
SkillSchema.statics = {};

module.exports = model("skill", SkillSchema);
