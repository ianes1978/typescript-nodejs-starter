// const Joi = require("joi");
import * as Joi  from 'joi'

export const validateCreateUser =  (user)=> {
    const userValidator = Joi.object({
        firstName: Joi.string().min(3).required(),
        lastName: Joi.string().min(3).required(),
        email: Joi.string().email({ minDomainSegments : 2 }).required(),
        isActive: Joi.bool()
    });
    return userValidator.validate(user);
}
export const validateEditUser = function (user) {
    const userValidator = Joi.object({
        _id: Joi.string().length(24).required(),
        firstName: Joi.string().min(3).required(),
        lastName: Joi.string().min(3).required(),
        email: Joi.string().email({ minDomainSegments : 2 }).required(),
        isActive: Joi.bool()
    });
    return userValidator.validate(user);
}