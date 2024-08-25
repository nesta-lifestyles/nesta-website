import bannerImage from "../../../images/ville/102/banner_11.avif"
import characteristics1 from "../../../images/ville/102/characteristics_1.avif"
import characteristics2 from "../../../images/ville/102/characteristics_2.avif"
import characteristics3 from "../../../images/ville/102/characteristics_3.avif"
import secondaryBanner1 from "../../../images/ville/102/banner_2_1.avif"
import { VilleMeetAnExpertData } from "./arcadia"

import meetAnExpertImage from "../../../images/ville/default_meet_an_expert.avif"

const banner = {
    "image":bannerImage,
    "banner_title":"Nestaville Series 201 -  Evoque",
    "side_title":"Nestaville Series 201 -  Evoque",
    "text":"The Evoque Model blends minimalist design with industrial materials to create functional, light-filled spaces."
}

const characteristics = {
    "title":"Characteristics",
    "images":[characteristics1, characteristics2,characteristics3],
    "text":"Discover the Evoque Model, where contemporary elegance meets practical functionality. This design philosophy prioritizes usability without sacrificing a sleek, modern aesthetic. Featuring clean lines, geometric shapes, and a harmonious blend of industrial materials like metal, glass, and concrete, the Zenith Model creates a visually appealing and highly functional living space. Every element is thoughtfully chosen to enhance both practicality and design, resulting in a perfect balance of form and function."
}

const secondaryBanners = [
    {
        "title":"Evoque",
        "image":secondaryBanner1
    }
]


const meetAnExpertdata = {...VilleMeetAnExpertData, "image":meetAnExpertImage}

export const initialEvoqueVillaData = {
    "banner":banner,
    "characteristics":characteristics,
    "secondaryBanners":secondaryBanners,
    "meetAnExpert":meetAnExpertdata
}