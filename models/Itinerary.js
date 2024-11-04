import { Schema, model } from "mongoose";
import mongoose from "mongoose";

let collection = "Itinerary";

let itinerarySchema = new Schema(
  {
    author: {
      name: { type: String, required: true },
      photo: { type: String, required: true },
    },
    city: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cities",
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    likes: {
      type: Number,
      default: 0,
    },
    hashtags: {
      type: [String],
      validate: {
        validator: (v) => v.length <= 4, // Limitar a 4 hashtags
        message: "You can only have up to 4 hashtags",
      },
    },
    comments: [
      {
        user: { type: String },
        text: { type: String },
        date: { type: Date, default: Date.now },
      },
    ],
    activities: [
      {
        name: { type: String, required: true },
        description: { type: String, required: true },
        photo: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

let Itinerary = model(collection, itinerarySchema);
export default Itinerary;
