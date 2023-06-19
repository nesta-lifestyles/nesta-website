import styled from "styled-components"
import { Text } from "../../elements/text"
import PrivacyDocument from "./privacy_note"


const PolicyContainer = styled.div``

const value =`Last Updated on 15 May 2022 <r> This privacy policy (“Privacy Policy”) describes how and when _____________. (“Company”, “We”, “Us”, or “Our”) collects, processes, uses, and shares Your (“You”, “Your” as applicable) information when You use the website plaeto.in (hereinafter referred to as “Platform”). The Company is committed to protecting Your privacy and the information that You share while using the Platform. We value the trust You place in Us. That’s why we maintain the highest security standards for securing the transactions and Your information.\n \n This Privacy Policy specifies the manner in which personal data and other information is collected, received, stored, processed, disclosed, transferred, dealt with or otherwise handled by the Company.\n\nPlease read the Privacy Policy carefully prior to using the Platform or accessing any material, information or availing any services through the Platform (“Services”).\n\n[By visiting the Platform or submitting Your electronic mail address for availing the Services and clicking on the “I accept” button provided on the Platform, You accept and agree to be bound by the terms and conditions of this Privacy Policy.]1 This Privacy Policy is incorporated into and subject to the [Terms of Use] and shall be read harmoniously and in conjunction with them.\n\nThis Privacy Policy (i) will be considered to be an electric record under the Indian data privacy laws including the Information Technology Act, 2000 read with rules and regulations made thereunder and (ii) will not require any physical, electronic, or digital signature by the Company.\n\n1. Collection of Information`
export const PrivacyPoilicyPage = () =>{
    return <>
        <PolicyContainer>
            <PrivacyDocument />
        </PolicyContainer>
    </>
}