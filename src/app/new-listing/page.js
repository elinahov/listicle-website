'use client'
import Header from "@/components/Header";
import styles from './page.module.scss';
import { useState } from "react";
import Image from "next/image";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { categories } from "@/data/categories";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const AddNewListing = () => {
    const [selectedImage, setSelectedImage] = useState()
    const [formValues, setFormValues] = useState({})

    const onInputChange = (key, e) => {
        setFormValues(vals => ({
            ...vals,
            [key]: e.target.value,
        }))
    }

    const onCategorySelect = (selectedCategory) => {
        setFormValues(vals => ({
            ...vals,
            category: selectedCategory
        }))
    }

    const onImageSelect = (e) => {
        setSelectedImage(e.target.files[0])
    }

    return (
        <div className={styles.newListingContainer}>
            <Header />

            <h2 className={styles.title}>Add New Listing</h2>

            <div className={styles.container}>
                <div className={styles.uploadContainer}>
                    <p className={styles.label}>Upload File</p>

                    {selectedImage ? (
                        <div className={styles.uploadedImageContainer}>
                            <Image className={styles.uploadedImage} alt="uplaoded image" src={URL.createObjectURL(selectedImage)} width={250} height={250} />
                            <Image onClick={() => setSelectedImage(null)} className={styles.removeImage} alt="delete" src={'/close.png'} width={32} height={32} />
                        </div>
                    ) : (
                        <div className={styles.uploadWrapper}>
                            <div className={styles.customUpload}>
                                <div className={styles.plusContainer}>
                                    <h4>+</h4>
                                </div>
                            </div>
                            <input className={styles.uploadInput} type="file" name="image" onChange={onImageSelect} />
                        </div>
                    )}
                </div>

                <div className={styles.form}>
                    <Input label="Title" placeholder="Listing Title" name="title" value={formValues.title} onChange={onInputChange} />

                    <p>Category</p>
                    <Dropdown
                        controlClassName={styles.dropdown} 
                        arrowClassName={styles.dropdownArrow} 
                        placeholderClassName={styles.dropdownPlaceholder}
                        options={categories} 
                        onChange={onCategorySelect} 
                        value={formValues.category}
                        placeholder="Select the category" 
                    />

                    <Input label="Price" placeholder="Enter price in USD" type="number" name="price" value={formValues.price} onChange={onInputChange} />
                    <Input label="Description" isTextarea placeholder="Tell us more..." name="description" value={formValues.description} onChange={onInputChange} />

                    <Button className={styles.submitButton}>Submit</Button>
                </div>

            </div>
        </div>
    )
}

export default AddNewListing;