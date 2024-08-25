import React from "react"
import { CommonRoutes } from "./common_routes"
import { NestaDecorRoutes } from "./nesta_decor_routes"
import { NestaDesignRoutes } from "./nesta_design_routes"
import { NestaVilleRoutes } from "./nesta_ville_routes"


export const AllRoutes = () => {
    return(<div>
                <CommonRoutes />
                <NestaVilleRoutes />
                <NestaDesignRoutes />
                <NestaDecorRoutes />  
            </div>)
}