import React, { useContext } from "react"
import { ContactUs } from "../../components/contact_us"
import styled from "styled-components"
import { Enquiries } from "../../components/contact_us/enquiries"
import { BannerWithTitleLayout } from "../../layouts/banner_layout"
import bannerImage from "../../images/designs/nesta_design_103/meet_an_expert.avif"
import { H2 } from "../../elements/text"
import { MainContainerDiv } from "../../App"
import { FormContext } from "../contact_us/form_context"
import { SuccessLayout } from "../../layouts/form_layout/success_layout"

const Container = styled.div`
    /* margin-left: 70px;
    margin-right: 73px; */
    padding: 70px;
    padding-top: 75px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    background-color: white;
    gap: 20px;
    border-radius: 16px;
    @media (max-width:600px) {
        padding: 20px;
        margin-top: 0px;
        padding-top: 0px;
        gap: 10px;
        border-radius: 14px;
    }
`

const TotalContainer = styled.div`
    /* margin-left: 70px;
    margin-right: 73px; */
    /* margin-top: 105px; */
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-radius: 16px;
`

const ContactUsContainer = styled.div`
    background-color: white;
    width: 100%;
    /* padding: 20px; */
    /* border-radius: 17px; */
    border-left: 1px;
    border-left-style: solid;
    border-left-color: #F5F5F5;
    padding:30px;
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    justify-content: center;
    align-items: center;
    padding-bottom: 100px;
    @media (max-width:600px) {
        border-top: 1px;
        border-top-style: solid;
        border-top-color: #F5F5F5;
        padding:0px;
        padding-top: 0px;
        padding-bottom: 50px;
        border-left:none;
    }
`

const EnquiryContainer = styled.div`
    padding-top:0px;
    border-radius: 17px;
    background-color: white;
`

const WriteToUsElementGap = styled.div`
    padding-bottom: 40px;
    width: 804px;
    justify-content: left;
    @media (max-width:600px) {
        width: 100%;
        padding-bottom: 10px;
    }
`

const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    background-color: white;
    padding: 20px;
    padding-top: 20px;
    border-radius: 16px;
    @media (max-width:600px) {
        flex-direction: column;
        padding: 5px;
        padding-top: 0px;
        gap: 10px;
        border-radius: 14px;
    }
`

export const ProjectSubmissionPage = () =>{
        const { isSuccess}= useContext(FormContext) 
        return(<MainContainerDiv>
                <TotalContainer>
                    <Container>   
                    <BannerWithTitleLayout src={bannerImage} title="Partner Services"/>
                    <ContentContainer>
                        <EnquiryContainer>
                            <Enquiries />
                        </EnquiryContainer>   
                        <ContactUsContainer>
                        {
                                !isSuccess && 
                                <WriteToUsElementGap> 
                                <H2 height="40px" width="100%">Project Submission</H2>
                                </WriteToUsElementGap>
                        }
                        {!isSuccess &&  <ContactUs/>}
                        {isSuccess && <SuccessLayout />}
                        </ContactUsContainer>
                    </ContentContainer>   
                    </Container>
                </TotalContainer>
            </MainContainerDiv>
        )
}