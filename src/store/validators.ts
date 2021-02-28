// const Joi = require("joi");
import { Joi } from 'joi'

export const validateCreateUser =  (user)=> {
    const userValidator = {
        firstName: Joi.string().min(3).required(),
        lastName: Joi.string().min(3).required(),
        email: Joi.string().email({ minDomainAtoms: 2 }).required(),
        isActive: Joi.bool()
    };
    return Joi.validate(user, userValidator);
}
export const validateEditUser = function (user) {
    const userValidator = {
        _id: Joi.string().length(24).required(),
        firstName: Joi.string().min(3).required(),
        lastName: Joi.string().min(3).required(),
        email: Joi.string().email({ minDomainAtoms: 2 }).required(),
        isActive: Joi.bool()
    };
    return Joi.validate(user, userValidator);
}