"use client"
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from "@/styles/auth.module.css"
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
import { UserValidation } from '@/lib/validations/userValidation';


const firstRandom :number = Math.round(Math.random() * 12) + 1;
const secondRandom:number = Math.round(Math.random() * 12) + 1;

const RegisterForm = () => {

    
 const form = useForm({
    resolver:zodResolver(UserValidation),
    // mode: 'onBlur',
    // reValidateMode: 'onChange',
    defaultValues: {
      accountType: 'retail',
        email: '',
        password: '',
        password_confirmation: '',
        firstName: '',
        lastName: '',
        subscribe: false,
        street: '',
        city: '',
        province: '',
        country: '',
        zipCode: '',
        phone: '',
        fax: '',
        iamHuman: `${firstRandom + secondRandom}`,
        iamHumanConfirm: '',
    },
    shouldFocusError: true,
    shouldUnregister: true,
 });

 const onSubmit = async (values: z.infer<typeof UserValidation>)=>{
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    console.log(response);
    
 }

   


  return (
    <Form {...form}>
    <form
    onSubmit={form.handleSubmit(onSubmit)} 
    className="flex flex-col justify-start gap-7">    
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
    <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem className='flex flex-col items-start  gap-1 w-full'>
            <FormLabel className='text-base-semibold text-gray-400'>
               Password *
            </FormLabel>
            <FormControl className='border-transparent bg-slate-200 rounded-xl'>
              <Input 
                type='password'
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
        name="password_confirmation"
        render={({ field }) => (
          <FormItem className='flex flex-col items-start  gap-1 w-full'>
            <FormLabel className='text-base-semibold text-gray-400'>
               Confirm password *
            </FormLabel>
            <FormControl className='border-transparent bg-slate-200 rounded-xl'>
              <Input 
                type='password'
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
    <FormField 
        control={form.control}
        name="subscribe"
        render={({ field }) => (
            <FormItem className='flex items-center space-y-0  gap-1 w-full'>
                <FormControl className='border-transparent bg-slate-200 rounded-lg'>
                <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className='account-form no-focus'
                />
                </FormControl>
                <FormLabel className='text-base-semibold pt-0 text-gray-400'>
                Subscribe to our newsletter
                </FormLabel>
                <FormMessage className="text-red-500 text-xs" />
            </FormItem>
        )}
    />
    <h3 className='font-bold text-primarymedium pb-3'>Billing Address</h3>
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
     <FormField
        control={form.control}
        name="fax"
        render={({ field }) => (
          <FormItem className='flex flex-col items-start  gap-1 w-full'>
            <FormLabel className='text-base-semibold text-gray-400'>
               Fax
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
        name="iamHuman"
        render={({ field }) => (
          <FormItem className=' flex-col items-start  gap-1 w-full hidden '>
            <FormControl className='border-transparent bg-slate-200 rounded-xl'>
              <Input 
                type='text'
                {...field}
                value={`${firstRandom + secondRandom}`}
                className='account-form no-focus'
              />
            </FormControl>
            <FormMessage className="text-red-500 text-xs" />
          </FormItem>
        )}
    />
    <FormField
        control={form.control}
        name="iamHumanConfirm"
        render={({ field }) => (
          <FormItem className='flex flex-col items-start  gap-1 w-full'>
            <FormLabel className='text-base-semibold text-gray-400'>
            {`${firstRandom} + ${secondRandom} = ?`}
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
    <Button type="submit" className={`${styles.microcadBtn} microcadBtn`}>Register</Button>
    </form>
  </Form>
  )
}

export default RegisterForm