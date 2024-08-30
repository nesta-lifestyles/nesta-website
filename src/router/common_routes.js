import { Route, Routes } from "react-router-dom"
import { ContactUsPage } from "../pages/contact_us"
import { ContactAnExpertPage } from "../pages/contact_an_expert"
import { ScheduleCallAgent } from "../pages/contact_us/schedule_call"
import React from "react"
import NestaHomePage from "../pages/home"
import { FormContextProvider } from "../pages/contact_us/form_context"
import { PrivacyPolicy } from "../pages/common_pages/privacy_policy/index"
import { TermsOfService } from "../pages/common_pages/terms_of_service/index"
import { CookiePolicy } from "../pages/common_pages/cookie_policy/index"
import { ProjectSubmissionPage } from "../pages/project_submission"


export const CommonRoutes = ()=>{
    return(<FormContextProvider>
            <Routes>
                    <Route path='/' Component={NestaHomePage} />
                    <Route path='/contact-us' Component={ContactUsPage} />
                    <Route path='/contact-an-expert' Component={ContactAnExpertPage} />
                    <Route path='/schduler-call-with-an-expert' Component={ScheduleCallAgent} />
                    <Route path='/privacy-policy' Component={PrivacyPolicy} />
                    <Route path='/terms-of-service' Component={TermsOfService} />
                    <Route path='/cookie-policy' Component={CookiePolicy} />
                    <Route path='/submit_project' Component={ProjectSubmissionPage} />
            </Routes>
            </FormContextProvider>)
}