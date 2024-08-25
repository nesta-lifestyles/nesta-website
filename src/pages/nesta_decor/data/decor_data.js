import bannerImage from "../../../images/decor/banner.avif"
import firstImage from "../../../images/decor/vero_sofa/1.avif"
import secondImage from "../../../images/decor/vero_sofa/2.avif"
import thirdImage from "../../../images/decor/vero_sofa/3.avif"
import mainImage from "../../../images/decor/vero_sofa/main.avif"
import { DesignMeetAnExpertData } from "../../nesta_design/data/contour"
import { Axis } from "./axis_book_shelf"
import { EquinoxWallDecor } from "./equinox_wall_decor"
import { Helix } from "./helix_data"
import { QuandroScreenWall } from "./quadro_screen_wall"

const veroSofa =  {
    name:"Vero Sofa",
    code:'NDC0N100',
    type:"Furniture",
    images:[firstImage, secondImage, thirdImage],
    main_image:mainImage,
    description:[
            "Upholstered in premium fabric or leather, Vero offers a plush seating experience that invites relaxation. Its clean silhouette and sturdy frame make it a versatile piece, seamlessly blending into any décor. The sofa’s innovative design includes adjustable headrests and modular components, allowing you to customize your seating arrangement to fit your space and lifestyle.",
            "Whether you're entertaining guests or enjoying a quiet evening at home, Vero provides the perfect balance of style and functionality. Experience contemporary living at its finest with Vero, where elegance meets comfort."
    ],
    information:"Discover the epitome of modern sophistication with Vero, a contemporary style sofa designed to transform your living space. Crafted with sleek lines and minimalist aesthetics, Vero combines luxurious comfort with timeless design.",
}



export const NestaDecorData = {
    banner:{
        title:"Nesta Decor",
        image:bannerImage
    },
    decorItems:[veroSofa, QuandroScreenWall, Axis, Helix, EquinoxWallDecor],
    meetAnExpert:DesignMeetAnExpertData,
}

