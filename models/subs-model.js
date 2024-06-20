import mongoose, { Schema } from "mongoose";

const SubscribersSchema = new Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  createdAt: {
    required: true,
    type: Date,
    default: Date.now(),
  },
  unsubscribed: {
    required: true,
    type: Boolean,
    default: false,
  },
});

export const Subscriber = mongoose.models.Subscriber ?? mongoose.model("Subscriber", SubscribersSchema);