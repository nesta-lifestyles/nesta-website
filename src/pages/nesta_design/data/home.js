import homeBanner from "../../../images/designs/home_banner.png"
import firstImage from "../../../images/designs/nesta_design_100/100.avif"
import secondImage from "../../../images/designs/nesta_design_101/gallery_1_1.avif"
import thirdImage from "../../../images/designs/nesta_design_102/gallery_1_1.avif"
import { DesignMeetAnExpertData } from "./contour"

import meetAnExpertImage from "../../../images/designs/default_meet_an_expert.avif"

const banner = {
    "image":homeBanner,
    "banner_title":"Nesta Design - The Intersection of Art and Design",
}

const galleryImages = [firstImage,secondImage,thirdImage]

const meetAnExpertdata = {...DesignMeetAnExpertData, "image":meetAnExpertImage}

export const NestaDesignHomePageData = {
    "banner":banner,
    "models":{
        "title":"Designs"
    },
    "gallery":galleryImages,
    "meetAnExpert":meetAnExpertdata
}