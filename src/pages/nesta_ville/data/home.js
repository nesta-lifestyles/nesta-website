import homeBanner from "../../../images/ville/202/banner_1.avif"
import firstImage from "../../../images/ville/102/banner_2_1.avif"
import secondImage from "../../../images/ville/203/banner_2_1.avif"
import thirdImage from "../../../images/ville/203/banner_2_2.avif"

import { VilleMeetAnExpertData } from "./arcadia"

import meetAnExpertImage from "../../../images/ville/default_meet_an_expert.avif"

const banner = {
    "image":homeBanner,
    "banner_title":"Nestaville - Where Artistry Meets Architecture",
}

const galleryImages = [firstImage,secondImage,thirdImage]

const meetAnExpertdata = {...VilleMeetAnExpertData, "image":meetAnExpertImage}

export const NestavilleHomePageData = {
    "banner":banner,
    "models":{
        "title":"Models"
    },
    "gallery":galleryImages,
    "meetAnExpert":meetAnExpertdata
}

