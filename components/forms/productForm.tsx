
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from "@/styles/product.module.css"
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
import { producValidationSchema } from '@/lib/validations/productValidation';
import {categories} from '@/constants/categories'
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import dynamic from 'next/dynamic';
import { an } from "@vidstack/react/dist/types/vidstack.js";


const QuillEditor = dynamic(() => import('react-quill'), { ssr: false });

const ProductForm = () => {
    const [content, setContent] = useState('');
    const [productTypes, setProductTypes] = useState(categories[0]);



    const form = useForm({
        resolver:zodResolver(producValidationSchema),
        defaultValues: {
          name: "",
          category: "",
          productType: "",
          brand: "",
          color: "",
          image: "",
          price: "",
          countInStock: "",
          weight: "",
          isNew: false,
          isSpecialOffer: false,
          isRefurbrished: false,
          description:'',
          isPopular: false,
        },
      });

      const onSubmit = async (values: z.infer<typeof producValidationSchema>)=>{
        console.log(values)
     }


     const quillModules = {
        toolbar: [
          [{ header: [1, 2, 3, false] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['link', 'image'],
          [{ align: [] }],
          [{ color: [] }],
          ['code-block'],
          ['clean'],
        ],
      };
    
    
      const quillFormats = [
        'header',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'list',
        'bullet',
        'link',
        'image',
        'align',
        'color',
        'code-block',
      ];
    
    
      const handleEditorChange = (newContent:any) => {
        setContent(newContent);
        console.log(newContent);
        
      };


      const handleproductTypeChange = (e:any) => {
        console.log(e.target.value);
        const newProductTypes = categories.filter((category) => category.category === e.target.value);
        setProductTypes(newProductTypes[0]); 
    }



      return(
        <Form {...form}>
            <form 
            onSubmit={form.handleSubmit(()=>{console.log('submitted')})} 
            className={styles.form}
            >
                <div className={styles.left}>
                <h6>Description</h6>
                <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                        <FormItem className='flex flex-col items-start  gap-1 w-full'>
                            <FormLabel className='text-base-semibold text-gray-400'>
                            product name
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

                    <div className={`${styles.formGroup} ${styles.textEditor}`}>
                        <label htmlFor="description">description</label>
                        <QuillEditor
                            value={content}
                            onChange={handleEditorChange}
                            modules={quillModules}
                            formats={quillFormats}
                            className="w-full h-[80%] pb-5  bg-white rounded-sm"
                        />
                    </div>
                    <h6>Category</h6>
                    <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>category</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                            <SelectTrigger className="w-full  border-transparent bg-slate-200 rounded-xl">
                                <SelectValue placeholder="category" />
                            </SelectTrigger>
                            </FormControl>
                            <SelectContent className=' border-transparent bg-slate-200'>
                                { categories.map((category, index) => (
                                    <SelectItem className='capitalize hover:bg-slate-300' key={index} value={category.category}>{category.category}</SelectItem>
                                ))}                           
                                </SelectContent>
                            </Select>
                        
                            <FormMessage className="text-red-500 text-xs" />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="productType"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>product type</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                            <SelectTrigger className="w-full  border-transparent bg-slate-200 rounded-xl">
                                <SelectValue placeholder="product type" />
                            </SelectTrigger>
                            </FormControl>
                            <SelectContent className=' border-transparent bg-slate-200'>
                                { productTypes.subCategories.map((productType, index) => (
                                    <SelectItem className='capitalize hover:bg-slate-300' key={index} value={productType}>{productType}</SelectItem>
                                ))}                           
                                </SelectContent>
                            </Select>
                        
                            <FormMessage className="text-red-500 text-xs" />
                        </FormItem>
                        )}
                    />

                </div>
                   

            </form>
        </Form>
      )
}

export default ProductForm