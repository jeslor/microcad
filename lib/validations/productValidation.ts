import * as z from 'zod';

export const producValidationSchema = z.object({
   name: z.string().min(2, {message: "name is required"}),
    price: z.number().min(0, {message: "price is required"}),
    category: z.string().min(2, {message: "category is required"}),
    productType: z.string().min(2, {message: "type is required"}),
    brand: z.optional(z.string()),
    color: z.optional(z.string()),
    imageURL: z.optional(z.string()),
    imageKey: z.optional(z.string()),
    weight: z.optional(z.number()),
    quatity: z.number().min(0, {message: "quantity is required"}),
    isNew: z.boolean().default(false).optional(),
    isSpecialOffer: z.boolean().default(false).optional(),
    isRefurbished: z.boolean().default(false).optional(),
    description: z.optional(z.array(z.string())),
    isPopular: z.boolean().default(false).optional(),
    mainDescription: z.optional(z.array(z.string())),
    specifications: z.optional(z.array(z.string())),
    generalDescription: z.optional(z.array(z.string())),
    extraDescription: z.optional(z.array(z.string())),
 
})