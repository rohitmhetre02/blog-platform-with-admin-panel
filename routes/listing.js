const express = require('express');
const router = express.Router();
const Listing = require("../models/listing.js")
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js")
const { listingSchema } = require("../schema.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware");
const listingController = require("../controllers/listings.js")
const multer = require('multer')
const { storage } = require("../cloudConfig.js");
const parser = multer({ storage });

router.get("/search", listingController.search);


router.route("/")
    .get(wrapAsync(listingController.index))
    .post(isLoggedIn,
        parser.single('image'),
        validateListing,
        wrapAsync(listingController.createPost)
    );


router.get("/new", isLoggedIn, listingController.renderNewForm);


router.route("/:id")
    .get(wrapAsync(listingController.showPost)
    )
    .put(isLoggedIn, isOwner, parser.single("image"), wrapAsync(listingController.updatePost))
    .delete(isLoggedIn,
        isOwner,
        wrapAsync(listingController.deletePost)
    );


router.get("/:id/edit",
    isLoggedIn, isOwner,
    wrapAsync(listingController.renderEditForm));


module.exports = router;