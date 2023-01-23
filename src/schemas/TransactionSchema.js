import joi from 'joi'

export const tranSchema = joi.object({  
  value: joi.number().required(),
  description: joi.string().required(),
  type: joi.string().valid("gain", "expense").required()
});

