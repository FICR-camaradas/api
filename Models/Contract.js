import mongoose from "mongoose";

const Schema = mongoose.Schema;

var ContractSchema = new Schema({
  nameContract: {
    type: String,
    required: "name_is_required",
  },
  userIdClient: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  userIdProfessional: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  serviceEvaluation: {
    type: Number,
    default: 0,
  },
  description: {
    type: String,
    default: "",
  },
  amountPaid: {
    type: Number,
    default: 0,
  },
  dateContract: {
    type: Date,
    default: Date.now,
  },
  erased: {
    type: Number,
    default: 0,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Contract", ContractSchema);
