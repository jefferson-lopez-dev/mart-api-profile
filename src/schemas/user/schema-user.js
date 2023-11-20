import { Schema, model } from "mongoose";

const schema_user = new Schema({
  profile_picture: {
    url: String,
    public_id: String,
    status: Boolean,
  },
  name: {
    type: String,
    trim: true,
  },
  last_name: {
    type: String,
    trim: true,
  },
  age: {
    type: Number,
  },
  country: {
    type: String,
    trim: true,
  },
  city: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
  },
  createdBy: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default model("profile_user", schema_user);
