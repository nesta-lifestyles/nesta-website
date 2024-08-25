import { Route, Routes } from "react-router-dom"
import { ContactUsPage } from "../pages/contact_us"
import { ContactAnExpertPage } from "../pages/contact_an_expert"
import { ScheduleCallAgent } from "../pages/contact_us/schedule_call"
import React from "react"
import NestaHomePage from "../pages/home"
import { FormContextProvider } from "../pages/contact_us/form_context"
import { PrivacyPolicy } from "../pages/privacy_policy"
import { TermsOfService } from "../pages/terms_of_service"


export const CommonRoutes = ()=>{
    return(<FormContextProvider>
            <Routes>
                    <Route path='/' Component={NestaHomePage} />
                    <Route path='/contact-us' Component={ContactUsPage} />
                    <Route path='/contact-an-expert' Component={ContactAnExpertPage} />
                    <Route path='/schduler-call-with-an-expert' Component={ScheduleCallAgent} />
                    <Route path='/privacy-policy' Component={PrivacyPolicy} />
                    <Route path='/terms-of-service' Component={TermsOfService} />
            </Routes>
            </FormContextProvider>)
}