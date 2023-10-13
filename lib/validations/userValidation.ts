import * as z from 'zod';

export const UserValidation = z.object({
    accountType: z.string().min(2, {message: "account type is required"}).max(100),
    email: z.string().email({message: "a valid email is required"}),
     password: z.string().min(8, {message:"password must be 8 characters or more with special characters"}).max(100),
     password_confirmation: z.string().min(8).max(100),
     firstName: z.string().min(2, {message:"first name is required"}).max(100),
     lastName: z.string().min(2, {message: "last name is required"}).max(100),
     subscribe: z.boolean().default(false).optional(),
     street: z.string().optional(),
     city: z.string().optional(),
     province: z.string().optional(),
     country: z.string({}).optional(),
     postalCode: z.string().optional(),
     phone: z.string().min(2, {message: "phone number is required"}).max(100),
     fax: z.string().optional(),
     iamHuman:z.string().optional(),
     iamHumanConfirm:z.string(),
 
}).refine(data => data.password === data.password_confirmation, {
    message: "passwords must match",
    path: ["password_confirmation"],
    })
    .refine(data => data.iamHuman === data.iamHumanConfirm, {
        message: "you failed the math test, try again",
        path: ["iamHumanConfirm"],
        })