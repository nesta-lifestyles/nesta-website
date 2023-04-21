import styled from "styled-components"
import { AgentCodeInputTextBox, AreaInputTextBox, CarpetAreaInputTextBox, OtherInfoInputTextBox } from "../../elements/form_elements/area_text_box"

const RowContiner = styled.div`
    display: flex;
    flex-direction: row;
    gap: 24px;
    margin-top: 20px;
    @media (max-width: 600px) {
        flex-direction: column;
    }
    
`



export const Details = () => {
    return(<>
            <RowContiner>
                <AreaInputTextBox placeholder="Site Address"/>
            </RowContiner>
            {/* <RowContiner>
                <CarpetAreaInputTextBox/>
                <AgentCodeInputTextBox/>
            </RowContiner> */}
            <RowContiner>
                <AreaInputTextBox placeholder="Describe your requirement"/>
            </RowContiner>
         </>

    )
}