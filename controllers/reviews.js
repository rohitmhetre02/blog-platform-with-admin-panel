const Listing = require("../models/listing.js")
const Review = require("../models/review.js")

module.exports.addReview = async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review)

    listing.reviews.push(newReview)
    await newReview.save();
    await listing.save();
    req.flash("success", "Review submitted!")
    res.redirect(`/listings/${listing._id}`);
}