"use client"
import { useState,useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styles from "@/styles/checkout.module.css"
import Spinner  from '@/components/single/spinner/spinner';
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
  import { Input } from "@/components/ui/input"
  import { Button } from "@/components/ui/button";
  import { zodResolver} from '@hookform/resolvers/zod';
import { checkoutUserValidationSchema } from '@/lib/validations/checkoutUserValidator';



const CheckoutForm = ({user}:any) => {

    console.log(user);
    
  
    let slectedPaymentMethod = user?.selctedPayment? user.selctedPayment : "credit card"
    const [selctedPayment, setSelctedPayment] = useState<any>(slectedPaymentMethod)
    console.log(selctedPayment);
    
    const[saveInfo, setSaveInfo] = useState<boolean>(false)
    const handlePaymentMethodChange = (e:any) => {
        setSelctedPayment(e.target.value)
        
    }
    const creditCardPaymentClasses  = selctedPayment ==="credit card" ? styles.echaPaymentMethod :''
    const payPalPaymentClasses  = selctedPayment ==="payPal" && styles.echaPaymentMethod

  

      const form = useForm({
            resolver: zodResolver(checkoutUserValidationSchema),
            mode: 'onBlur',
            reValidateMode: 'onChange',
            defaultValues: {
                email: user? user.email : "",
                country: user? user.country : "",
                firstName: user? user.firstName : "",
                lastName: user? user.lastName : "",
                accountType: user? user.accountType : "",
                street: user? user.street : "",
                city: user? user.city : "",
                province: user? user.province : "",
                zipCode: user? user.zipCode : "",
                phone: user? user.phone : "",
                creditCardNumber: user? user.creditCardNumber : "",
                creditCardExpiration: user? user.creditCardExpiration : "",
                creditCardCVV: user? user.creditCardCVV : "",
                creditCardName: user? user.creditCardName : "",
                billingStreet: user? user.billingStreet : "",
                billingCity: user? user.billingCity : "",
                billingProvince: user? user.billingProvince : "",
                billingZipCode: user? user.billingZipCode : "",
                billingPhone: user? user.billingPhone : "",
    
            },
            // shouldFocusError: true,
            // shouldUnregister: true,
          });
          



    const onSubmit = (data:any) => {
        console.log(data)
    }

  return true?  (
    
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
                    <Select  onValueChange={field.onChange} defaultValue={field.value}>
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
            <h3>Payment</h3>
            <div className={`${creditCardPaymentClasses}`}>
                <div className={styles.eachPaymentMethodHeader}>
                    <input type="radio" value="credit card" checked={selctedPayment==="credit card"?true:false} onChange={handlePaymentMethodChange}/>
                    <label htmlFor="">Credit card</label>
                    <div className={styles.eachPaymentMethodLogos}>
                        <img src="/static/media/logos/1.svg" alt="" />
                        <img src="/static/media/logos/2.svg" alt="" />
                        <img src="/static/media/logos/3.svg" alt="" />
                        <img src="/static/media/logos/4.svg" alt="" />
                        <img src="/static/media/logos/5.svg" alt="" />
                        <img src="/static/media/logos/6.svg" alt="" />
                        <img src="/static/media/logos/7.svg" alt="" />
                    </div>
                </div>  
                <div className={styles.creditCardPaymentDetails}>
                    <FormField
                    control={form.control}
                    name="creditCardNumber"
                    render={({ field }) => (
                    <FormItem className='flex flex-col items-start  gap-1 w-full pt-3'>
                        <FormControl className='border-transparent bg-slate-200 rounded-xl'>
                        <Input 
                            type='text'
                            {...field}
                            className='account-form no-focus'
                            placeholder='Card number'
                        />
                        </FormControl>
                        <FormMessage className="text-red-500 text-xs" />
                    </FormItem>
                    )}
                    />
                    <div className={styles.checoutForm2Separator}>
                        <FormField
                        control={form.control}
                        name="creditCardExpiration"
                        render={({ field }) => (
                        <FormItem className='flex flex-col items-start  gap-1 w-full pt-3'>
                        
                            <FormControl className='border-transparent bg-slate-200 rounded-xl'>
                            <Input 
                                type='text'
                                {...field}
                                className='account-form no-focus'
                                placeholder='Expiration date (MM/YY)'
                            />
                            </FormControl>
                            <FormMessage className="text-red-500 text-xs" />
                        </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="creditCardCVV"
                        render={({ field }) => (
                        <FormItem className='flex flex-col items-start  gap-1 w-full pt-3'>
                            <FormControl className='border-transparent bg-slate-200 rounded-xl'>
                            <Input 
                                type='text'
                                {...field}
                                className='account-form no-focus'
                                placeholder='security code'
                            />
                            </FormControl>
                            <FormMessage className="text-red-500 text-xs" />
                        </FormItem>
                        )}
                        />
                    </div>
                    <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                    <FormItem className='flex flex-col items-start  gap-1 w-full pt-3'>
                        <FormControl className='border-transparent bg-slate-200 rounded-xl'>
                        <Input 
                            type='text'
                            {...field}
                            className='account-form no-focus'
                            placeholder='Name on card'
                        />
                        </FormControl>
                        <FormMessage className="text-red-500 text-xs" />
                    </FormItem>
                    )}
                    />
                </div> 
            </div>
            <div className={styles.echaPaymentMethod}>
                <div className={styles.eachPaymentMethodHeader}>
                <input type="radio"value="payPal" checked={selctedPayment==='payPal'?true:false} onChange={handlePaymentMethodChange}/>
                    <label htmlFor="">PayPal</label>
                    <div className={styles.eachPaymentMethodLogos}>
                        <img src="/static/media/logos/paypal.svg" alt="" />
                    </div>
                </div>  
            </div>  
            <h3>Remember me</h3>
            <div className={styles.saveInfo}>
               <input id='rememberInfo' type="checkbox" checked={saveInfo} onChange={()=>setSaveInfo(!saveInfo)}/>
               <label className="text-slate-400" htmlFor="rememberInfo">Save my information for a faster checkout</label>
            </div>

            <Button type="submit" className={`${styles.microcadBtn} microcadBtn`}>Pay now</Button>

        </form>
    </Form>
  ):
  <Spinner />
  
}

export default CheckoutForm