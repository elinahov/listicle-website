'use client'
import Header from "@/components/Header";
import styles from './page.module.scss';
import { useState } from "react";
import Image from "next/image";
import Input from "@/components/Input";
import Button from "@/components/Button";

const AddNewListing = () => {
    const [selectedImage, setSelectedImage] = useState()

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
                    <Input label="Title" />
                    <Input label="Price" />

                    <Button className={styles.submitButton}>Submit</Button>
                </div>

            </div>
        </div>
    )
}

export default AddNewListing;