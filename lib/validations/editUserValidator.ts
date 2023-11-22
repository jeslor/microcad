import * as z from 'zod';

export const EditUserValidation = z.object({
    accountType: z.string().min(2, {message: "account type is required"}).max(100),
    email: z.string().email({message: "a valid email is required"}),
     firstName: z.string().min(2, {message:"first name is required"}).max(100),
     lastName: z.string().min(2, {message: "last name is required"}).max(100),
     subscribe: z.boolean().default(false).optional(),
     street: z.string().optional(),
     city: z.string().optional(),
     province: z.string().optional(),
     country: z.string({}).optional(),
     zipCode: z.string().optional(),
     phone: z.string().min(2, {message: "phone number is required"}).max(100),
     fax: z.string().optional(),
     billingStreet: z.string().optional(),
    billingCity: z.string().optional(),
    billingProvince: z.string().optional(),
    billingZipCode: z.string().optional(),
    billingPhone: z.string().optional(),
     iamHuman:z.string().optional(),
     iamHumanConfirm:z.string(),
 
}).refine(data => data.iamHuman === data.iamHumanConfirm, {
        message: "you failed the math test, try again",
        path: ["iamHumanConfirm"],
    })