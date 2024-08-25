import React from "react"

import { TitleTextImagesInRowLayout } from "../../../../layouts/image_text_widget"


// const characteristics = {
//     "title":"Characteristics",
//     "images":[sampleImage,sampleImage,sampleImage],
//     "text":"Welcome to the Weimar Model, where form and function seamlessly merge. This design philosophy emphasizes practicality while maintaining an elegant, minimalist aesthetic. Achieved through the use of industrial materials like metal, glass, and concrete, the model features clean lines and geometric shapes. Every element, from layout to material choice, enhances both usability and visual appeal, creating a harmonious blend of functionality and design."
// }


export const WeimarCharacteristics = (props) =>{
    return(<div>
            <TitleTextImagesInRowLayout title={props.characteristics.title} text={props.characteristics.text} images={props.characteristics.images} />
        </div>)
}