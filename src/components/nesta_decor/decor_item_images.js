import React, { useState } from "react"
import { DecorItemImagesLayout } from "../../layouts/nesta_decor/decor_item_images_layout";

export const DecorImageComponent = (props) => {
        const [selectedIndex, updateSelectedImageIndex] = useState(0);

        const handleToUpdateSelectedImageIndex=(index) => {
            // console.log("HANDLE TO UPDATE IMAGE IS CALLED")
            updateSelectedImageIndex(index)
        }

        return(<DecorItemImagesLayout decorItem = {props.decorItem} selectedImageIndex={selectedIndex} 
            selectedImageHandler={handleToUpdateSelectedImageIndex}>
        </DecorItemImagesLayout>)
}