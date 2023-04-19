import React, {FC, useCallback, useEffect, useRef} from 'react';
import IconButton from "@mui/material/IconButton";
import ImageIcon from "@mui/icons-material/CropOriginal";
import {ImagesPropsType} from "./TweetTextFieldForm";

export const UploadImages: FC<ImagesPropsType> = ({ images, setImages }) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const handleClickUploadImage = () => {
        if (inputRef.current) {
            inputRef.current.click()
        }
    }
    
    const handleChangeFileInput = useCallback((e: Event): void => {
        if (e.target) {
            const target = e.target as HTMLInputElement
            const file = target.files?.[0]
            if (file) {
                const fileObj = new Blob([file])
                setImages(prev => [...prev, {
                    file: file,
                    url: URL.createObjectURL(fileObj)
                }])
            }
        }
    }, [setImages])

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.addEventListener("change", handleChangeFileInput) 
        }

        return () => {
            if (inputRef.current) {
                inputRef.current.removeEventListener("change", handleChangeFileInput)
            }
        }
    }, [handleChangeFileInput])

    return (
        <>
            <IconButton onClick={handleClickUploadImage} disabled={images.length > 3}>
                <input ref={inputRef} type={"file"} accept={"image/*"} hidden multiple />
                <ImageIcon color={images.length > 3 ? "disabled" : "primary"} />
            </IconButton>
        </>
    )
}