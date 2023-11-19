"use client"
import { useForm } from 'react-hook-form';
import styles from "@/styles/checkout.module.css"
import * as z from 'zod';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  import { Checkbox } from "@/components/ui/checkbox";
  import { Input } from "@/components/ui/input"
  import { Button } from "@/components/ui/button";
  import { zodResolver} from '@hookform/resolvers/zod';
import { checkoutUserValidationSchema } from '@/lib/validations/checkoutUserValidator';

const CheckoutForm = () => {

    const form = useForm({
        resolver: zodResolver(checkoutUserValidationSchema),
        mode: 'onBlur',
        reValidateMode: 'onChange',
        defaultValues: {
            email: '',
            country: '',
            firstName: '',
            lastName: '',
            accountType: '',
            street: '',
            city: '',
            province: '',
            zipCode: '',
            phone: '',
            preferedPaymentMethod: '',
            creditCardNumber: '',
            creditCardExpiration: '',
            creditCardCVV: '',
            creditCardName: '',
            billingStreet: '',
            billingCity: '',
            billingProvince: '',
            billingZipCode: '',
            billingPhone: '',
            saveInformation:false

        },
        shouldFocusError: true,
        shouldUnregister: true,
      });


    const onSubmit = (data:any) => {
        console.log(data)
    }

  return (
    <Form {...form}>
        <form
        onSubmit={form.handleSubmit(onSubmit)} 
        className="flex flex-col justify-start gap-7">  
            <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
            <FormItem className='flex flex-col items-start  gap-1 w-full'>
                <FormLabel className='text-base-semibold text-gray-400'>
                Email *
                </FormLabel>
                <FormControl className='border-transparent bg-slate-200 rounded-xl'>
                <Input 
                    type='email'
                    {...field}
                    className='account-form no-focus'
                />
                </FormControl>
                <FormMessage className="text-red-500 text-xs" />
            </FormItem>
            )}
            />  
            <h3>Delivery</h3>
            <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                <FormItem>
                    <FormLabel className="text-slate-400">Select country</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                    <SelectTrigger className="w-full  border-transparent bg-slate-200 rounded-xl">
                        <SelectValue placeholder="select country" />
                    </SelectTrigger>
                    </FormControl>
                    <SelectContent className=' border-transparent bg-slate-200'>
                            <SelectItem className='capitalize hover:bg-slate-300' value="unitedstates">United states 🇺🇸</SelectItem>
                            <SelectItem className='capitalize hover:bg-slate-300' value="canada">Canada 🇨🇦</SelectItem>
                        </SelectContent>
                    </Select>
                
                    <FormMessage className="text-red-500 text-xs" />
                </FormItem>
                )}
            />
            <div className={styles.checoutForm2Separator}>
            <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
            <FormItem className='flex flex-col items-start  gap-1 w-full'>
                <FormLabel className='text-base-semibold text-gray-400'>
                First name *
                </FormLabel>
                <FormControl className='border-transparent bg-slate-200 rounded-xl'>
                <Input 
                    type='text'
                    {...field}
                    className='account-form no-focus'
                />
                </FormControl>
                <FormMessage className="text-red-500 text-xs" />
            </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
            <FormItem className='flex flex-col items-start  gap-1 w-full'>
                <FormLabel className='text-base-semibold text-gray-400'>
                Last name *
                </FormLabel>
                <FormControl className='border-transparent bg-slate-200 rounded-xl'>
                <Input 
                    type='text'
                    {...field}
                    className='account-form no-focus'
                />
                </FormControl>
                <FormMessage className="text-red-500 text-xs" />
            </FormItem>
            )}
            />

            </div>
            <FormField
                control={form.control}
                name="accountType"
                render={({ field }) => (
                <FormItem>
                    <FormLabel className="text-slate-400">Account type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                    <SelectTrigger className="w-full  border-transparent bg-slate-200 rounded-xl">
                        <SelectValue placeholder="Account Type" />
                    </SelectTrigger>
                    </FormControl>
                    <SelectContent className=' border-transparent bg-slate-200'>
                            <SelectItem className='capitalize hover:bg-slate-300' value="retail">retail</SelectItem>
                            <SelectItem className='capitalize hover:bg-slate-300' value="reseller">reseller</SelectItem>
                            <SelectItem className='capitalize hover:bg-slate-300' value="corporate">corporate</SelectItem>
                            <SelectItem className='capitalize hover:bg-slate-300' value="educational">educational</SelectItem>
                            <SelectItem className='capitalize hover:bg-slate-300' value="government">government</SelectItem>
                        </SelectContent>
                    </Select>
                    <FormMessage className="text-red-500 text-xs" />
                </FormItem>
            )}
            />
             <FormField
            control={form.control}
            name="street"
            render={({ field }) => (
            <FormItem className='flex flex-col items-start  gap-1 w-full'>
                <FormLabel className='text-base-semibold text-gray-400'>
                Street
                </FormLabel>
                <FormControl className='border-transparent bg-slate-200 rounded-xl'>
                <Input 
                    type='text'
                    {...field}
                    className='account-form no-focus'
                />
                </FormControl>
                <FormMessage className="text-red-500 text-xs" />
            </FormItem>
            )}
            />
            <div className={styles.checoutForm3Separator}>
                <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                    <FormItem className='flex flex-col items-start  gap-1 w-full'>
                        <FormLabel className='text-base-semibold text-gray-400'>
                        City
                        </FormLabel>
                        <FormControl className='border-transparent bg-slate-200 rounded-xl'>
                        <Input 
                            type='text'
                            {...field}
                            className='account-form no-focus'
                        />
                        </FormControl>
                        <FormMessage className="text-red-500 text-xs" />
                    </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="province"
                    render={({ field }) => (
                    <FormItem className='flex flex-col items-start  gap-1 w-full'>
                        <FormLabel className='text-base-semibold text-gray-400'>
                        Pronvice / State
                        </FormLabel>
                        <FormControl className='border-transparent bg-slate-200 rounded-xl'>
                        <Input 
                            type='text'
                            {...field}
                            className='account-form no-focus'
                        />
                        </FormControl>
                        <FormMessage className="text-red-500 text-xs" />
                    </FormItem>
                    )}
                />
                <FormField
                control={form.control}
                name="zipCode"
                render={({ field }) => (
                    <FormItem className='flex flex-col items-start  gap-1 w-full'>
                        <FormLabel className='text-base-semibold text-gray-400'>
                        ZIP code
                        </FormLabel>
                        <FormControl className='border-transparent bg-slate-200 rounded-xl'>
                        <Input 
                            type='text'
                            {...field}
                            className='account-form no-focus'
                        />
                        </FormControl>
                        <FormMessage className="text-red-500 text-xs" />
                    </FormItem>
                )}
                />
            </div>
            <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
            <FormItem className='flex flex-col items-start  gap-1 w-full'>
                <FormLabel className='text-base-semibold text-gray-400'>
                Phone Number *
                </FormLabel>
                <FormControl className='border-transparent bg-slate-200 rounded-xl'>
                <Input 
                    type='text'
                    {...field}
                    className='account-form no-focus'
                />
                </FormControl>
                <FormMessage className="text-red-500 text-xs" />
            </FormItem>
            )}
            />
        </form>
    </Form>
  )
}

export default CheckoutForm