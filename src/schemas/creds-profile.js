import { Schema, model } from "mongoose";

const creds_profile_model = new Schema({
  picture: {
    url: String,
    public_id: String,
    status: Boolean,
  },
  fullname: {
    type: String,
    trim: true,
  },
  country: {
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

export default model("creds_profile", creds_profile_model);
