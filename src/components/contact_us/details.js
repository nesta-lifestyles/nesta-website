import React, { useContext, useState } from "react"
import { SelectItem } from "../../elements/form"
import { TextAreaInputBox } from "../../elements/form/text_area"
import styled from "styled-components"
import { Text } from "../../elements/text"
import { RowFlex } from "../../elements/flex/flex_container"
import { useLocation } from "react-router-dom"
import { getNestaDesignName, getNestaVilleName, isUrlBelongsNestaDecor, isUrlBelongsNestaDesign, isUrlBelongsNestaVille } from "../../utils/url_utils"
import { getIndex } from "../../utils/data_utils"
import { FormContext } from "../../pages/contact_us/form_context"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    @media (max-width: 600px) {
        flex-direction: column;  
    }
`
const TextContainer = styled.div`
    margin-bottom: 16px;
`

export const NestaDesignData = {
    "options":[
        {
            "key":"nesta-design-100",
            "value":"florence",
            "wantToShow":"Florence",
            "autoSelect":false
        },
        {
            "key":"nesta-design-200",
            "value":"contour",
            "wantToShow":"Contour",
            "autoSelect":false
        },
        {
            "key":"nesta-design-201",
            "value":"equinox",
            "wantToShow":"Equinox",
            "autoSelect":false
        },
        {
            "key":"nesta-design-202",
            "value":"serendi",
            "wantToShow":"Serendi",
            "autoSelect":false
        }
    ]
}

export const NestaVilleData = {
    "options":[
        {
            "key":"nesta-ville-100",
            "value":"arcadia",
            "wantToShow":"Arcadia",
            "autoSelect":false
        },
        {
            "key":"nesta-ville-200",
            "value":"weimar",
            "wantToShow":"Weimar",
            "autoSelect":false
        },
        {
            "key":"nesta-design-201",
            "value":"Classica",
            "wantToShow":"Classica",
            "autoSelect":false
        },
        {
            "key":"nesta-design-202",
            "value":"evoque",
            "wantToShow":"Evoque",
            "autoSelect":false
        },
        {
            "key":"nesta-design-202",
            "value":"essence",
            "wantToShow":"Essence",
            "autoSelect":false
        }

    ]
}


const EachItemContainer = styled.div`
    flex: 0 0 50%;
`


export const Details = (props) => {
    const {  formData} = useContext(FormContext);
    const location = useLocation();
    const [isNestaDesignSelectorVisible, updateNestaDesignSelectorVisible] = useState(true)
    const [isNestaVilleSelectorVisible, updateNestaVilleSelectorVisible] = useState(true)
    const [isNestaDecor, updateNestaDecor] = useState(false)
    const updateToContext = (jsonPartOfProjectDetails) => {
        const updatedFormData = {...formData, projectDetails:{...formData.projectDetails, ...jsonPartOfProjectDetails}}
        props.onChange(updatedFormData)
    }

    if(isNestaVilleSelectorVisible && isUrlBelongsNestaDesign(location)) {
        updateNestaDesignSelectorVisible(true)
        updateNestaVilleSelectorVisible(false)
        updateNestaDecor(false)
        updateToContext({'nestaDesignList':[NestaDesignData.options[getIndex(NestaDesignData.options, getNestaDesignName(location))]],
            'nestaVilleList':[],
        });
    }
    
    NestaDesignData.options.forEach(option => {
        if (option.value === getNestaDesignName(location)) {
            // updateselectedNestaDesign(option)
            // updateToContext({['nestaDesignList']:[option]});
            option.autoSelect = true; // Update autoSelect
        } else {
            option.autoSelect = false; 
        }
    });

    if(isNestaDesignSelectorVisible && isUrlBelongsNestaVille(location)) {
        updateNestaVilleSelectorVisible(true)
        updateNestaDesignSelectorVisible(false)
        updateNestaDecor(false)
        updateToContext({'nestaVilleList':[NestaVilleData.options[getIndex(NestaVilleData.options, getNestaVilleName(location))]],
            'nestaDesignList':[],
        });
    }

   
    const selectedNestaVille =  getNestaVilleName(location)
    NestaVilleData.options.forEach(option => {
        if (option.value === selectedNestaVille) {
            // updateselectedNestaVille(option)
            // updateToContext({['nestaVilleList']:[option]}); 
            option.autoSelect = true; // Update autoSelect
        } else {
            option.autoSelect = false; 
        }
    });

    const getTitle = () => {
        if(isNestaDesignSelectorVisible && !isNestaVilleSelectorVisible) {
            return "Select Your Design"
        }

        if(!isNestaDesignSelectorVisible && isNestaVilleSelectorVisible){
            return "Select Your Model"
        }

        if(isNestaDesignSelectorVisible && isNestaVilleSelectorVisible){
            return "Select Your Choices"
        }
    }

    if(isNestaDecor && isUrlBelongsNestaDecor(location)){
        updateNestaDecor(true)
    }
    
   
    const handleNestaDesignOnChange = (design)=> {
        updateToContext({'nestaDesignList':[NestaDesignData.options[getIndex(NestaDesignData.options, design)]]});
    }

    const handleNestaVilleOnChange = (ville)=>{
        updateToContext({'nestaVilleList':[NestaVilleData.options[getIndex(NestaVilleData.options, ville)]]}); 
    }

    const onChange = (e) => {
        const {name, value} = e.target
        updateToContext({[name]:value});
    }

    return(<div>
            <Container>
                <div>
                    <TextContainer>
                        <Text width="auto" height="auto">{getTitle()}</Text>
                    </TextContainer>
                    <RowFlex gap="10px">
                        {isNestaDesignSelectorVisible && 
                        <EachItemContainer>
                            <SelectItem placeholder="NestaModel" width="100%" selectData={NestaDesignData} onChange={(e)=>handleNestaDesignOnChange(e.target.value)}/>
                        </EachItemContainer>}
                        {isNestaVilleSelectorVisible && 
                        <EachItemContainer>
                            <SelectItem placeholder="Choose Model" width="100%" selectData={NestaVilleData} onChange={(e)=>handleNestaVilleOnChange(e.target.value)}/>
                        </EachItemContainer>}
                    </RowFlex>
                </div>
                <div>
                    <TextContainer>
                        <Text width="auto" height="auto">Project Details</Text>
                    </TextContainer>
                    <TextAreaInputBox placeholder="Describe Your Project" name="projectDescription" onChange={onChange}/>
                </div>
            </Container>
        </div>)
}