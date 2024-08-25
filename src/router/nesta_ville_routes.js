import React from "react"
import { Route, Routes } from "react-router-dom"
import NestaVilleClassica from '../pages/nesta_ville/classica';
import NestaVilleHomePage from '../pages/nesta_ville/home_page';
import NestaVilleArcadia from '../pages/nesta_ville/arcadia';
import NestaVilleEvoque from '../pages/nesta_ville/evoque';
import NestaVilleEssence from '../pages/nesta_ville/essence';
import NestaVilleWeimar from '../pages/nesta_ville/weimar';


export const NestaVilleRoutes =()=>{
    return(<Routes>
                <Route path='/ville'  Component={NestaVilleHomePage} />
              <Route path='/ville/home' Component={NestaVilleHomePage} />
              <Route path='/ville/classica' Component={NestaVilleClassica} />
              <Route path='/ville/weimar' Component={NestaVilleWeimar} />
              <Route path='/ville/essence' Component={NestaVilleEssence} />
              <Route path='/ville/evoque' Component={NestaVilleEvoque} />
              <Route path='/ville/arcadia' Component={NestaVilleArcadia} />
        </Routes>)
}