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
import { DotLottiePlayer, Controls } from '@dotlottie/react-player';

const Page = () => {

  const loginSchema = z.object({
    email: z.string().email(),
  });

  const form = useForm({
    resolver:zodResolver(loginSchema),
      defaultValues:{
        email:"",
      }
    })

    const onSubmit = (values: z.infer<typeof loginSchema>) => {
      console.log(values)
    }

  return (
    <div className={`${styles.login} customwidth mx-auto`}>
        <div className="passwordResetHolder">
            <h2 className="text-primayColor">Forgot password</h2>
            <div className={styles.loginWrapper}>
                <div className={styles.userInputs}>
                    <h6 className='font-base text-sm text-primarymedium pb-3'>Enter your email we will send you a rest link;</h6>
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
                                    placeholder='Enter your email'
                                    type='email'
                                    {...field}
                                    className='account-form no-focus'
                                    />
                                </FormControl>
                                <FormMessage className="text-red-500 text-xs" />
                                </FormItem>
                            )}
                            /> 
                            <Button className="microcadBtn">Submit</Button>
                        </form>
                    </Form>
                    <a className="pt-8 flex items-center pointer text-sm text-primaryLight hover:text-secondaryColor" href="/login"><Icon className='mr-2' icon="ic:round-arrow-back" /> Back to login</a>
                </div>
                <div className={styles.information}>
                    <div className={styles.imageWraper}>
                    <DotLottiePlayer
                        src="/static/media/lotties/passwordResetAnimation"
                        autoplay
                        loop
                        style={{ height: '100%', width: '100%' }}
                    >
  
                    </DotLottiePlayer>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Page