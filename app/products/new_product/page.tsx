"use client";

import styles from "@/styles/product.module.css";
import {useState, useRef} from 'react'
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import { an } from "@vidstack/react/dist/types/vidstack.js";
import {categories} from '@/constants/categories'


const QuillEditor = dynamic(() => import('react-quill'), { ssr: false });


const page = () => {
    const [product, SetProduct] = useState({
        name: '',
        price: '',
        type: '',
        category: '',
        brand: '',
        color: '',
        imageURL: '',
        imageKey: '',
        weight: '',
        quantity: '',
        isNew: false,
        isSpecialOffer: false,
        isRefurbished: false,
        description: '',
        ispopular: false,
        mainDescription: [],
        specifications: [],
        generalDescription: [],
        extraDescription: [],
    })
    const [content, setContent] = useState('');
    const [productTypes, setProductTypes] = useState(categories[0]);


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

  return (
    <div className={`${styles.pageHeight} customwidth mx-auto`}>
        <div className={styles.newProduct}>
            <h1 className="text-primayColor">Add a new Product</h1>
            <form className={styles.form}>
               
                <div className={styles.left}>
                    <h6>Description</h6>
                    <div className={styles.segment}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" placeholder="Enter product name" />
                        </div>
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
                    </div>
                    <h6>Category</h6>
                    <div className={styles.segment}>
                        <div className={styles.formGroup}>
                            <label htmlFor="category">product category</label>
                            <select onChange={handleproductTypeChange}  name="category" id="category">
                                {categories.map((category, index) => {
                                    return <option key={index} value={category.category}>{category.category}</option>
                                })}
                            </select>
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="category">product type</label>
                            <select name="type" id="category">
                                {productTypes.subCategories.map((productType, index) => {
                                    return <option key={index} value={productType}>{productType}</option>
                                })}
                            </select>
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="type">product brand</label>
                            <input type="text" name="brand" placeholder="brand name"/>
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="type">Color</label>
                            <input type="text" name="brand" placeholder="brand name"/>
                        </div>
                    </div>
                    
                </div>

                <div className={styles.right}>
                    <h6>product images</h6>
                    <div className={styles.segment}>
                        <div className={styles.formGroup}>
                            <input type="file" name="image" id="image" />
                        </div>
                    </div>
                    <h6>price and shipping</h6>
                    <div className={styles.segment}>
                        <div className={styles.formGroup}>
                            <label htmlFor="price">Price</label>
                            <input type="number" name="price" id="price" placeholder="Enter product price" />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="countInStock">Count In Stock</label>
                            <input type="number" name="countInStock" id="countInStock" placeholder="Enter count in stock" />
                        </div>
                    
                        <div className={styles.formGroup}>
                            <label htmlFor="type">item weight</label>
                            <input type="text" name="brand" placeholder="weight"/>
                        </div>
                    </div>

                   

                    <div className={`${styles.formGroup} ${styles.formChecks}`}>
                        <input type="checkbox" name="isNew" id="isFeatured" />
                        <label htmlFor="isNew">Is New</label>
                    </div>
                    <div className={`${styles.formGroup} ${styles.formChecks}`}>
                        <input type="checkbox" name="isSpecialOffer" id="isFeatured" />
                        <label htmlFor="isSpecialOffer">Is Special Offer</label>
                    </div>
                    <div className={`${styles.formGroup} ${styles.formChecks}`}>
                        <input type="checkbox" name="isRefurbrished" id="isFeatured" />
                        <label htmlFor="isRefurbrished">Is refurbrished</label>
                    </div>
                </div>
            </form>

        </div>
    
    </div>
  )
}

export default page