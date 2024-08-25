import bannerImage from "../../../images/ville/200/banner_11.avif"
import characteristics1 from "../../../images/ville/200/characteristics_1.avif"
import characteristics2 from "../../../images/ville/200/characteristics_2.avif"
import characteristics3 from "../../../images/ville/200/characteristics_3.avif"
import secondaryBanner1 from "../../../images/ville/200/banner_2_1.avif"
import { VilleMeetAnExpertData } from "./arcadia"

import meetAnExpertImage from "../../../images/ville/default_meet_an_expert.avif"

const banner = {
    "image":bannerImage,
    "banner_title":"Nestaville Series 200 -  Weimar",
    "side_title":"Nestaville Series 200 -  Weimar",
    "text":"Weimar Model blends minimalist design with industrial materials and innovative forms to create functional, light-filled spaces."
}

const characteristics = {
    "title":"Characteristics",
    "images":[characteristics1, characteristics2,characteristics3],
    "text":"Welcome to the Weimar Model, where form and function seamlessly merge. This design philosophy emphasizes practicality while maintaining an elegant, minimalist aesthetic. Achieved through the use of industrial materials like metal, glass, and concrete, the model features clean lines and geometric shapes. Every element, from layout to material choice, enhances both usability and visual appeal, creating a harmonious blend of functionality and design."
}

const meetAnExpertdata = {...VilleMeetAnExpertData, "image":meetAnExpertImage}

const secondaryBanners = [
    {
        "title":"Weimar",
        "image":secondaryBanner1
    }
]


export const initialWeimarVillaData = {
    "banner":banner,
    "characteristics":characteristics,
    "secondaryBanners":secondaryBanners,
    "meetAnExpert":meetAnExpertdata
}