
import bannerImage from "../../../images/designs/nesta_design_101/101.avif"
import inspiration1 from "../../../images/designs/nesta_design_101/inspiration_1.avif"
import inspiration2 from "../../../images/designs/nesta_design_101/inspiration_2.avif"
import inspiration3 from "../../../images/designs/nesta_design_101/inspiration_3.avif"
import whyToChooseImage from "../../../images/designs/nesta_design_101/why_to_choose.avif"

import bedroom11 from "../../../images/designs/nesta_design_101/gallery_b_1_1.avif"
import bedroom12 from "../../../images/designs/nesta_design_101/gallery_b_1_2.avif"
import bedroom13 from "../../../images/designs/nesta_design_101/gallery_b_1_1.avif"

import bedroom21 from "../../../images/designs/nesta_design_101/gallery_b_2_1.avif"
import bedroom22 from "../../../images/designs/nesta_design_101/gallery_br_2_2.avif"
// import bedroom23 from "../../../images/designs/nesta_design_101/gallery_br_2_2.avif"

import kitchen11 from "../../../images/designs/nesta_design_101/gallery_k_1_1.avif"
import kitchen12 from "../../../images/designs/nesta_design_101/gallery_k_1_2.avif"
import kitchen13 from "../../../images/designs/nesta_design_101/gallery_k_1_3.avif"

import hall11 from "../../../images/designs/nesta_design_101/gallery_h_1_1.avif"
import hall12 from "../../../images/designs/nesta_design_101/gallery_h_1_2.avif"
import hall13 from "../../../images/designs/nesta_design_101/gallery_h_1_3.avif"

import bathroom11 from "../../../images/designs/nesta_design_101/gallery_bath_1.avif"
import bathroom12 from "../../../images/designs/nesta_design_101/gallery_bath_1_2.avif"
import bathroom13 from "../../../images/designs/nesta_design_101/gallery_bath_1_3.avif"

import misk1 from "../../../images/designs/nesta_design_101/gallery_bar_1_1.avif"
import book1 from "../../../images/designs/nesta_design_101/gallery_book_1_1.avif"
import misk3 from "../../../images/designs/nesta_design_101/gallery_1_4.avif"

import { DesignMeetAnExpertData } from "./contour"



const banner = {
    "image":bannerImage,
    "banner_title":"Nesta Design Series 100 - Equinox",
    "side_title":"Nesta Design Series 101 -  Equinox",
    "text":"Equinox interior design creates a calm, minimalist space with earthy tones and natural elements for ultimate relaxation."
}

const characteristics = {
    "title":"Inspiration",
    "images":[inspiration1,inspiration2,inspiration3],
    "text":"Equinox interior design focuses on creating serene, harmonious spaces with simplicity, clean lines, and a muted color palette. By integrating natural materials like wood and stone and maximizing natural light, it fosters a sense of calm and balance through minimalistic furnishings and uncluttered layouts, promoting inner peace and well-being."
}


const whyToChoose = {
    "image":whyToChooseImage,
    "title":"Why Choose Equinox",
    "items":[
        "Serenity and Balance", 
        "Soothing Color Palettes",
        "Natural Materials",
        "Warm and Calming Space"
    ]
}


const galleryImages = [kitchen11, kitchen12,kitchen13,bedroom11, bedroom12,bedroom13,bedroom21, bedroom22, bedroom22,hall11, hall12,hall13,bathroom11, bathroom12,bathroom13,misk1, book1, misk3]

export const initialEquinoxDesignData = {
    "banner":banner,
    "inspiration":characteristics,
    "whyToChoose":whyToChoose,
    "gallery":galleryImages,
    "meetAnExpert":DesignMeetAnExpertData
}