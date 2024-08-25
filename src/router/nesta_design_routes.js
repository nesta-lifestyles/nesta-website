import { Route ,Routes } from "react-router-dom"
import { NestaDesignHomePage } from "../pages/nesta_design/nesta_design"
import React from "react"
import NestaDesignFlorence from '../pages/nesta_design/florence';
import NestaDesignContour from '../pages/nesta_design/contour';
import NestaDesignSerendi from '../pages/nesta_design/serendi';
import NestaDesignEquinox from '../pages/nesta_design/equinox';


export const NestaDesignRoutes =()=>{
    return(<Routes>
                <Route path='/design'  Component={NestaDesignHomePage} />
                <Route path='/design/home' Component={NestaDesignHomePage} />
                <Route path='/design/equinox' Component={NestaDesignEquinox} />
                <Route path='/design/serendi' Component={NestaDesignSerendi} />
                <Route path='/design/florence' Component={NestaDesignFlorence} />
                <Route path='/design/contour' Component={NestaDesignContour} />
        </Routes>)
}