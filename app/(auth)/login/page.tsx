"use client"
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
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { zodResolver } from '@hookform/resolvers/zod';
import { Icon } from '@iconify/react/dist/iconify.js';


const Page = () => {

  const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  });

  const form = useForm({
    resolver:zodResolver(loginSchema),
      defaultValues:{
        email:"",
        password:""
      }
    })

    const onSubmit = (values:z.infer<typeof loginSchema >) => {
      console.log(values)
    }
  

  return (
    <div className={`${styles.login} customwidth mx-aut`}>
    <h2 className="text-primayColor">Login</h2>
    <div className={styles.loginWrapper}>
      <div className={styles.userInputs}>
        <h6 className='font-bold text-primarymedium pb-3'>Enter details</h6>
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
                    Email
                  </FormLabel>
                  <FormControl className='border-transparent bg-slate-200 rounded-xl'>
                    <Input 
                    autoComplete='off'
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
                    Password
                  </FormLabel>
                  <FormControl className='border-transparent bg-slate-200 rounded-xl'>
                    <Input 
                    autoComplete='off'
                      type='password'
                      {...field}
                      className='account-form no-focus'
                    />
                  </FormControl>
                  <FormMessage className="text-red-500 text-xs" />
                </FormItem>
              )}
            />
            <div className="flex flex-col items-start justify-start">
              <Button
                type="submit"
                className=" microcadBtn px-9"
              >
                Login
              </Button>
              <a href="/reset-password" className="pt-4 text-sm text-base-semibold text-primaryLight hover:text-primayColor">Forgot password?</a>
              <p className='pt-4 text-sm text-base-semibold'>don't have an account? <a href="/register" className=" text-primaryLight hover:text-primayColor">Register</a></p>
            </div>
          </form>
        </Form>
        <h6 className='pt-8 font-bold text-primarymedium pb-3'>Other ways to sign in</h6>
        <div className={styles.otherWays}>
          <a
            type="submit"
            className=""
          >
            <Icon icon="devicon:google" />
            Login with Google
          </a>
          <a
            type="submit"
            className=""
          >
            <Icon icon="logos:facebook" />
            Login with Facebook
          </a>
        </div>
      </div>
      <div className={`${styles.information} hidden md:block`}>
        <div className={styles.imageWraper}>
          <img src='/static/media/microcad_logo.png' alt="logo"/>
        </div>
      </div>
    </div>
</div>
  )
}

export default Page