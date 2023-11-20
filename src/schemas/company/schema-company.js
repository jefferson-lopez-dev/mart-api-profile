import { Schema, model } from "mongoose";

const schema_company = new Schema({
  logo: {
    type: String,
  },
  name: {
    type: String,
  },
  type: {
    type: String,
  },
  description: {
    type: String,
  },
  wed_site: {
    type: String,
  },
  currency: {
    type: String,
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

export default model("data_company", schema_company);
