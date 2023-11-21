import * as z from 'zod';

export const checkoutUserValidationSchema = z.object({
    email: z.string().email({message: "Invalid email"}).min(2, {message: "email is required"}),
    billingCountry: z.string({}).min(3, {message: "country is required"}),
    firstName: z.string().min(2, {message: "first name is required"}),
    lastName: z.string().min(2, {message: "last name is required"}),
    accountType: z.string().optional(),
    street: z.string().min(2, {message: "street is required"}).max(100),
    city: z.string().min(2, {message: "city is required"}).max(100),
    province: z.string().min(2, {message: "province is required"}).max(100),
    zipCode: z.string().min(2, {message: "zip code is required"}).max(100),
    phone: z.string().min(2, {message: "phone number is required"}).max(100),
    preferedPaymentMethod: z.string().min(2, {message: "payment method is required"}).max(100),
    creditCardNumber: z.string().min(2, {message: "credit card number is required"}).max(100),
    creditCardExpiration: z.string().min(2, {message: "credit card expiration is required"}).max(100),
    creditCardCVV: z.string().min(2, {message: "credit card cvv is required"}).max(100),
    creditCardName: z.string().min(2, {message: "credit card name is required"}).max(100),
    billingStreet: z.string().min(2, {message: "billing street is required"}).max(100),
    billingCity: z.string().min(2, {message: "billing city is required"}).max(100),
    billingProvince: z.string().min(2, {message: "billing province is required"}).max(100),
    billingZipCode: z.string().min(2, {message: "billing zip code is required"}).max(100),
    billingPhone: z.string().min(2, {message: "billing phone number is required"}).max(100),
});
