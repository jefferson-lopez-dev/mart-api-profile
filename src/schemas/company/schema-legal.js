import { Schema, model } from "mongoose";

const schema_legal = new Schema({
  gmail: {
    type: String,
  },
  country: {
    type: String,
  },
  region: {
    type: String,
  },
  address: {
    type: String,
  },
  chamber_of_commerce: {
    type: String,
  },
  nit_dian: {
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

export default model("data_legal", schema_legal);
