import mongoose from "mongoose";
import bcrypt from "bcrypt";

const Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: {
    type: String,
    required: "name_is_required",
  },
  email: {
    type: String,
    required: "email_is_required",
    uniqued: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: "password_is_required",
    select: false,
    set: (value) => bcrypt.hashSync(value, 10),
  },
  professional: {
    type: Number,
    default: 0,
  },
  telephone: {
    type: String,
    default: "",
  },
  state: {
    type: String,
    default: "",
  },
  city: {
    type: String,
    default: "",
  },
  zipcode: {
    type: String,
    default: "",
  },
  address: {
    type: String,
    default: "",
  },
  gender: {
    type: String,
    default: "",
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

export default mongoose.model("User", UserSchema);
