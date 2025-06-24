const express = require('express');
const router = express.Router({ mergeParams: true });
const { reviewSchema } = require("../schema.js");
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js")
const Review = require("../models/review.js")
const ExpressError = require("../utils/ExpressError.js")
const { validateReview } = require("../middleware");
const listingController = require("../controllers/reviews.js")


router.post("/", validateReview, wrapAsync(listingController.addReview)
)

module.exports = router;