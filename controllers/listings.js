const Listing = require("../models/listing.js")

module.exports.index = async (req, res) => {
  const { category } = req.query;
  const page = parseInt(req.query.page) || 1;
  const perPage = 12;
  const skip = (page - 1) * perPage;
  let alllistings;
  if (category) {
    alllistings = await Listing.find({
      category: { $regex: category, $options: "i" }
    }).sort({ date: -1 }).populate("author");
  } else {
    alllistings = await Listing.find().sort({ date: -1 }).populate("author");
  }
  const featuredListings = alllistings.slice(0, 3);
  const otherListings = alllistings.slice(3 + skip, 3 + skip + perPage);
  const totalOthers = alllistings.length - 3;
  const hasNextPage = skip + perPage < totalOthers;
  res.render("listings/index", {
    featuredListings,
    otherListings,
    currentPage: page,
    hasNextPage,
    category,
    currentuser: req.user
  });
};


module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
}


module.exports.showPost = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id).populate("reviews").populate('author');
  if (!listing) {
    req.flash("error", "Listing You Requested for Does Not Exist! ")
    res.redirect("/listings");
  }
  res.render("listings/show.ejs", { listing })
}


module.exports.createPost = async (req, res, next) => {
  let url = req.file.path;
  let filename = req.file.filename;
  const newListing = new Listing(req.body.listings);
  newListing.author = req.user._id;
  newListing.image = { url, filename }
  await newListing.save();
  req.flash("success", "Post published successfully!");
  res.redirect("/listings");
}


module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);

  if (!listing) {
    req.flash("error", "Listing not found!");
    return res.redirect("/listings");
  }
  res.render("listings/edit.ejs", { listing });
}


module.exports.updatePost = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findByIdAndUpdate(id, { ...req.body.listings });

  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };
    await listing.save();
  }

  req.flash("success", "Post updated successfully!");
  res.redirect(`/listings/${id}`);
};


module.exports.deletePost = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findByIdAndDelete(id);
  req.flash("success", "Post deleted successfully.");
  res.redirect("/listings");
}


module.exports.search = async (req, res) => {
  const query = req.query.q;

  const listings = await Listing.find({
    $or: [
      { title: { $regex: query, $options: "i" } },
      { category: { $regex: query, $options: "i" } }
    ]
  }).populate("author");

  res.render("listings/search.ejs", { listings, query });
}



