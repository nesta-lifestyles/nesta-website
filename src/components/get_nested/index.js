import styled from "styled-components"
import { HeadSection } from "./head_section"
import { Details } from "./details"
import { PersonalDetails } from "./personal_details"
import React from "react"
import { connect } from "react-redux"
import { updateName } from "../reducer"
import { BottomSection } from "./bottom_section"


const Divider = styled.div`
    width: 834px;
    height: 2px;
    border-radius: 16px;
    background-color: #F3F3F3;
    margin-top: 18px;
    @media (max-width: 600px) {
        width: 100%;
    }
    
`

const GetNestedContainer = styled.div`
    width: 834px;
    height: 622px;
    padding: 27px;
    @media (max-width: 600px) {
        width: fit-content;
        height: fit-content;
        padding: 0px;
        margin-left: 10px;
        margin-right: 10px;
        /* padding-left: 24px; */
        /* margin-right: 24px; */
    }
`
    

class GetNested extends React.Component {
    constructor(props){
        super(props)
        this.state={
            name:this.props.name,
            isNameEmpty: this.props.isNameEmpty,
            email:this.props.email,
            isEmailEmpty: this.props.isEmailEmpty,
            phoneNumber:this.props.phoneNumber,
            isPhoneNumberEmpty:this.props.isPhoneNumberEmpty,
            
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
        
        } else {
        
            const { dispatch } = this.props;      
            // dispatch(updateName({ type: 'UPDATE_ISNAME_EMPTY', isNameEmpty:false}));
        }
    }

    handleEmail = () => {
        if(this.isEmpty(this.state.email)) {
            console.log("handle email updating"+this.state.email)
            const { dispatch } = this.props;                
            dispatch(updateName({ type: 'UPDATE_ISEMAIL_EMPTY', isEmailEmpty:true}));
        
        } else {
        
            const { dispatch } = this.props;      
            // dispatch(updateName({ type: 'UPDATE_ISEMAIL_EMPTY', isEmailEmpty:false}));
        }
    }

    handlePhoneNumber = () => {
        if(this.isEmpty(this.state.phoneNumber)) {
            const { dispatch } = this.props;                
            dispatch(updateName({ type: 'UPDATE_IS_PHONE_NUMBER_EMPTY', isPhoneNumberEmpty:true}));
        
        }
        //  else {
        //     const { dispatch } = this.props;      
        //     dispatch(updateName({ type: 'UPDATE_IS_PHONE_NUMBER_EMPTY', isPhoneNumberEmpty:false}));
        // }
    }


    handleSubmit=(e)=>{
        console.log("Handle Submit Here...!"+JSON.stringify(this.state))
        e.preventDefault();
        this.handleName()
        this.handleEmail()
        this.handlePhoneNumber()
    }
    
    static getDerivedStateFromProps(props, state){
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
            isPhoneNumberEmpty: props.isPhoneNumberEmpty
        }
    }
    
    render(){
        return(<GetNestedContainer>
                    <HeadSection onSubmit={this.handleSubmit} onCancel={this.handleCancel} />
                    <Divider />
                    <PersonalDetails isNameEmpty={this.props.isNameEmpty} isEmailEmpty={this.props.isEmailEmpty} isPhoneNumberEmpty={this.props.isPhoneNumberEmpty}/>
                    <Details/>
                    <BottomSection onSubmit={this.handleSubmit}/>
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
    return {
        name,email,phoneNumber,isNameEmpty, isEmailEmpty,isPhoneNumberEmpty
    };
}
export default connect(mapStateToProps)(GetNested)