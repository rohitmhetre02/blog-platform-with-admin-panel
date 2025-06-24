const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: { type: String, required: true },
  date: { type: Date, default: Date.now },
  description: String,
  category: String,
  image: {
    url: String,
    filename: String,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Review'
    }
  ]
})

const Listing = mongoose.model("listing", listingSchema);
module.exports = Listing;