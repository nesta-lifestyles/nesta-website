import bannerTestImage from "../../../images/designs/nesta_design_102/banner.avif"
import inspiration1 from "../../../images/designs/nesta_design_102/inspiration_2_1.png"
import inspiration2 from "../../../images/designs/nesta_design_102/inspiration_2.avif"
import inspiration3 from "../../../images/designs/nesta_design_102/inspiration_3.avif"
import whyToChooseImage from "../../../images/designs/nesta_design_102/why_to_choose.png"

import { DesignMeetAnExpertData } from "./contour"

import bedRoom11 from "../../../images/designs/nesta_design_102/gallery_br_1_1.avif"
import bedRoom12 from "../../../images/designs/nesta_design_102/gallery_br_1_2.avif"
import bedRoom13 from "../../../images/designs/nesta_design_102/gallery_br_1_3.avif"

import hall11 from "../../../images/designs/nesta_design_102/gallery_h_1_1.avif"
import hall12 from "../../../images/designs/nesta_design_102/gallery_h_1_2.avif"
import hall13 from "../../../images/designs/nesta_design_102/gallery_h_1_3.avif"

import misc11 from "../../../images/designs/nesta_design_102/gallery_m_1_1.png"
import misc12 from "../../../images/designs/nesta_design_102/gallery_m_1_2.png"
import misc13 from "../../../images/designs/nesta_design_102/gallery_m_1_3.avif"

const banner = {
    "image":bannerTestImage,
    "banner_title":"Nesta Design Series 101 - Serendi",
    "side_title":"Nesta Design Series 101 -  Serendi",
    "text":"Serendi design fuses Japanese simplicity with Scandinavian coziness for a chill, minimalist vibe."
}

const inspirations = {
    "title":"Inspiration",
    "images":[inspiration1,inspiration2,inspiration3],
    "text":"Serendi interior design merges Japanese elegance with Scandinavian warmth, creating a harmonious blend of natural materials like wood and bamboo with clean lines and a muted color palette. It features minimalistic yet functional furniture and emphasizes craftsmanship to achieve a serene and uncluttered ambiance. This design approach results in a timeless living space that promotes relaxation and a deep appreciation for simplicity."
}

const whyToChoose = {
    "image":whyToChooseImage,
    "title":"Why Choose Florence",
    "items":[
        "Elegant Simplicity",
        "Balanced Aesthetics",
        "Functional Simplicity",
        "Natural Materials"
    ]
}

const galleryImages = [hall11,hall12,hall13,bedRoom11,bedRoom12,bedRoom13,misc11,misc12,misc13]

export const initialSerendiDesignData = {
    "banner":banner,
    "inspiration":inspirations,
    "whyToChoose":whyToChoose,
    "gallery":galleryImages,
    "meetAnExpert":DesignMeetAnExpertData
}