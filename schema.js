const Joi = require("joi");

module.exports.listingSchema = Joi.object({
    listings: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        category: Joi.string().required(),
        image: Joi.string().allow("", null),
    }).required(),
});




module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        name: Joi.string().required(),
        rating: Joi.number().required().min(1).max(5),
        comment: Joi.string().required(),
    }).required(),
});
