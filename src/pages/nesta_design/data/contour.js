import bannerImage from "../../../images/designs/nesta_design_103/banner.avif"
import inspiration1 from "../../../images/designs/nesta_design_103/inspiration_1.avif"
import inspiration2 from "../../../images/designs/nesta_design_103/inspiration_2.avif"
import inspiration3 from "../../../images/designs/nesta_design_103/inspiration_3.avif"
import whyToChooseImage from "../../../images/designs/nesta_design_103/why_to_choose.avif"

import gallery1 from "../../../images/designs/nesta_design_103/gallery_1_11.avif"
import gallery2 from "../../../images/designs/nesta_design_103/gallery_h_1.avif"
import gallery3 from "../../../images/designs/nesta_design_103/gallery_1_3.avif"

import gallery4 from "../../../images/designs/nesta_design_103/gallery_lib_1_1.avif"
import gallery5 from "../../../images/designs/nesta_design_103/gallery_br_2_1.avif"
import gallery6 from "../../../images/designs/nesta_design_103/gallery_br_3_1.avif"

import gallery7 from "../../../images/designs/nesta_design_103/gallery_br_1_1.avif"
import gallery8 from "../../../images/designs/nesta_design_103/gallery_br_2_1.avif"
import gallery9 from "../../../images/designs/nesta_design_103/gallery_br_1_1.avif"

import meetAnExpertImage from "../../../images/designs/nesta_design_103/meet_an_expert.avif"

const banner = {
    "image":bannerImage,
    "banner_title":"Nesta Design Series 103 -  Contour",
    "side_title":"Nesta Design Series 103 -  Contour",
    "text":"Contour design combines sleek lines, neutral colors, and functional elegance to create modern, uncluttered spaces."
}

const characteristics = {
    "title":"Inspiration",
    "images":[inspiration1, inspiration2,inspiration3],
    "text":"Contour interior design combines sleek, modern aesthetics with functional elegance, creating a dynamic and visually striking environment. It features clean lines, innovative materials, and a neutral color palette, complemented by minimalist yet practical furniture. Emphasizing open spaces and natural light, contemporary design achieves a balanced and uncluttered ambiance. This approach results in a timeless and sophisticated living space that enhances daily life with a fresh, modern flair."
}

const whyToChoose = {
    "image":whyToChooseImage,
    "title":"Why Choose Florence",
    "items":[
        "Modern Aesthetics", 
        "Functional Elegance",
        "Neutral Palette",
        "Open and Light"
    ]
}

export const DesignMeetAnExpertData = {
    "title":"Meet an Expert",
    "text":"Talk to our design expert for personalized guidance in home architecture and interior design. Book a consultation today and elevate your living spaces with tailored solutions",
    "image":meetAnExpertImage
}

// meet_expert_data:{
//  *   "title":"",
//  *    "text":"",
//  *    "image":""
//  * }

const galleryImages = [gallery1,gallery2, gallery3,gallery4,gallery5, gallery6,gallery7,gallery8, gallery9]

export const initialContourDesignData = {
    "banner":banner,
    "inspiration":characteristics,
    "whyToChoose":whyToChoose,
    "gallery":galleryImages,
    "meetAnExpert":DesignMeetAnExpertData
}