import styled from "styled-components"
import { HeadSection } from "./head_section"
import { Details } from "./details"
import { PersonalDetails } from "./personal_details"
import React from "react"
import { connect } from "react-redux"
import { updateName } from "../reducer"
import { BottomSection } from "./bottom_section"
import { SubmitOverlay } from "./submit_overlay"


const Divider = styled.div`
    width: 781px;
    height: 2px;
    border-radius: 16px;
    background-color: #F3F3F3;
    /* margin-top: 18px; */
    @media (max-width: 600px) {
        width: 100%;
    }
    
`

const GetNestedContainer = styled.div`
    width: 781px;
    height: 100%;
    padding-left: 24px; 
    padding-right: 24px; 
    padding-top: 24px;
    
    
    @media (max-width: 600px) {
        width: fit-content;
        height: fit-content;
        padding: 0px;
        margin-left: 10px;
        margin-right: 10px;
        overflow-y: scroll;
    }
`

const SubmittedOverlayContainer = styled.div`
    position: fixed;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.56);
    z-index: 2;
    cursor: pointer;
    
`
    

class GetNested extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name:this.props.name,
            isNameEmpty: this.props.isNameEmpty,
            email: this.props.email,
            isEmailEmpty: this.props.isEmailEmpty,
            phoneNumber:this.props.phoneNumber,
            isPhoneNumberEmpty:this.props.isPhoneNumberEmpty,
            showSubmittedOverlay:this.props.showOverlay,
        }
    }

    isEmpty = (value)=>{
        if(value == {}||value == "" ||value==undefined){
            return true
        }
        return false
    }

    handleName = () => {
        if(this.isEmpty(this.state.name)) {
            console.log("Handle Name Updating name"+this.state.name)
            const { dispatch } = this.props;                
            dispatch(updateName({ type: 'UPDATE_ISNAME_EMPTY', isNameEmpty:true}));
            return false
        } else {
            return true
        }
    }

    handleEmail = () => {
        if(this.isEmpty(this.state.email)) {
            console.log("handle email updating"+this.state.email)
            const { dispatch } = this.props;                
            dispatch(updateName({ type: 'UPDATE_ISEMAIL_EMPTY', isEmailEmpty:true}));
            return false
        } else {
            return true
            const { dispatch } = this.props;      
            // dispatch(updateName({ type: 'UPDATE_ISEMAIL_EMPTY', isEmailEmpty:false}));
        }
    }

    handlePhoneNumber = () => {
        if(this.isEmpty(this.state.phoneNumber)) {
            const { dispatch } = this.props;                
            dispatch(updateName({ type: 'UPDATE_IS_PHONE_NUMBER_EMPTY', isPhoneNumberEmpty:true}));
            return false
        } 
        return true
        //  else {
        //     const { dispatch } = this.props;      
        //     dispatch(updateName({ type: 'UPDATE_IS_PHONE_NUMBER_EMPTY', isPhoneNumberEmpty:false}));
        // }
    }


    handleSubmit=(e)=>{
        console.log("Handle Submit Here...!"+JSON.stringify(this.state))
        e.preventDefault();
        let isNameHandled = this.handleName()
        let isEmailHandled = this.handleEmail()
        let isPhoneNumberHandled = this.handlePhoneNumber()
        const { dispatch } = this.props;
        if(isNameHandled && isEmailHandled && isPhoneNumberHandled) {
            dispatch(updateName({ type: 'CLEAR_GET_NESTED'}))
            dispatch(updateName({ type: 'UPDATE_OVERLAY', showOverlay:true}));
        }
    }
    
    static getDerivedStateFromProps(props, state) {
        let newPhoneNumber = state.phoneNumber
        let newName = state.name
        let newEmail = state.email
       
        if (props.phoneNumber !== state.phoneNumber) {
            newPhoneNumber = props.phoneNumber
        }

        if(props.name != state.name) {
            newName = props.name
        }

        if(props.email != state.email){
            newEmail = props.email
        }

        return {
            name:newName,
            isNameEmpty: props.isNameEmpty,
            email:newEmail,
            isEmailEmpty: props.isEmailEmpty,
            phoneNumber:newPhoneNumber,
            isPhoneNumberEmpty: props.isPhoneNumberEmpty,
            showSubmittedOverlay: props.showOverlay
        }
    }
    
    render(){
        return(<GetNestedContainer>
                    <HeadSection onSubmit={this.handleSubmit} onCancel={this.handleCancel} />
                    <Divider />
                    <PersonalDetails isNameEmpty={this.props.isNameEmpty} isEmailEmpty={this.props.isEmailEmpty} isPhoneNumberEmpty={this.props.isPhoneNumberEmpty}/>
                    <Details/>
                    <BottomSection onSubmit={this.handleSubmit}/>
                 {this.state.showSubmittedOverlay && <SubmittedOverlayContainer>
                        <SubmitOverlay/>
                    </SubmittedOverlayContainer>}
                </GetNestedContainer>)
    } 
}
const mapStateToProps=(state)=> {
    const name = state.getNested.name;
    const email = state.getNested.email;
    const isNameEmpty = state.getNested.isNameEmpty;
    const phoneNumber = state.getNested.phoneNumber;
    const isEmailEmpty= state.getNested.isEmailEmpty;
    const isPhoneNumberEmpty = state.getNested.isPhoneNumberEmpty;
    const showOverlay = state.getNested.showOverlay

    return {
        name,email,phoneNumber,isNameEmpty, isEmailEmpty,isPhoneNumberEmpty, showOverlay
    };
}
export default connect(mapStateToProps)(GetNested)