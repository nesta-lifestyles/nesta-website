import bannerImage from "../../../images/ville/201/banner_11.avif"
import characteristics1 from "../../../images/ville/201/characteristics_1.avif"
import characteristics2 from "../../../images/ville/201/characteristics_2.avif"
import characteristics3 from "../../../images/ville/201/characteristics_3.avif"

import comfort1 from "../../../images/ville/201/comfort_1.avif"
import comfort2 from "../../../images/ville/201/comfort_2.avif"
import comfort3 from "../../../images/ville/201/comfort_3.avif"

import temperature1 from "../../../images/ville/201/temperature_1.avif"
import temperature2 from "../../../images/ville/201/temperature_2.avif"
import temperature3 from "../../../images/ville/201/temperature_3.avif"

import secondaryBanner1 from "../../../images/ville/201/banner_2_1.avif"
import secondaryBanner2 from "../../../images/ville/201/banner_2_2.avif"


import meetAnExpertImage from "../../../images/ville/201/meet_an_expert.avif"

import { VilleMeetAnExpertData } from "./arcadia"

const banner = {
    "image":bannerImage,
    "banner_title":"Nestaville Series 203 -  Essence",
    "side_title":"Nestaville Series 203 -  Essence",
    "text":"Essence Model Features raw concrete and bold geometric forms, showcasing rugged textures and a focus on functionality and abstract expression."
}

const characteristics = {
    "title":"Characteristics",
    "images":[characteristics1, characteristics2,characteristics3],
    "text":"Welcome to the Essence Model, where raw power meets refined abstraction. This design philosophy emphasizes bold geometric forms and rugged textures while maintaining a sense of monumental presence. Achieved through the use of raw concrete and dramatic sculptural elements, the model highlights simplicity and functionality. Every detail, from structural form to material choice, underscores the raw beauty of construction techniques, creating a striking blend of strength and abstract expression."
}

const comfortAnalysis = {
    "title" : "Comfort Analysis",
    "images" : [comfort1, comfort2,comfort3],
    "text":"The Comfort Analysis Report of the Essence Model assesses how well the building design meets occupants' comfort needs while minimizing environmental impact. It evaluates thermal comfort, air quality, lighting, and acoustics, using data from simulations and real-world measurements. The model optimizes building performance for both occupant well-being and sustainability, ensuring a harmonious blend of comfort and eco-friendliness."
}

const temperatureAnalysis = {
    "title":"Operative Temperature Analysis",
    "images" : [temperature1, temperature2,temperature3],
    "text":"The Operative Temperature Analysis of the Essence Model examines how effectively the building design maintains a comfortable indoor temperature while reducing environmental impact. It measures the balance between indoor air temperature and radiant heat, using data from simulations and real-world conditions. This analysis ensures that the model optimizes thermal comfort and energy efficiency, creating a harmonious indoor environment that supports both occupant well-being and sustainability."
}

const secondaryBanners = [
    {
        "title":"Essence",
        "image":secondaryBanner1
    },{
        "title":"Essence - Sectional View",
        "image":secondaryBanner2
    }
]

const meetAnExpertdata = {...VilleMeetAnExpertData, "image":meetAnExpertImage}

export const initialEssenceVillaData = {
    "banner":banner,
    "characteristics":characteristics,
    "comfortAnalysis":comfortAnalysis,
    "temperatureAnalysis":temperatureAnalysis,
    "secondaryBanners":secondaryBanners,
    "meetAnExpert":meetAnExpertdata
}