
import styled from "styled-components";
import logoImage from '../../images/logo/11.png'
import { NavLink as Link } from 'react-router-dom';
import React, {useState }  from 'react';
import menuBars from "../../images/menu/menu.svg"
import invertedLogoImage from '../../images/logo/logo.png'
import whiteLogo from "../../images/logo/logo_white.svg"
import moibleNestaLogo from '../../images/logo/logo_white.svg'
import moibleMenuOpenNestaLogo from '../../images/logo/logo_secondary.svg'
import { ProductInfo } from "../../layouts/product_info";
import { NestaDesignInformation, ProductInformation } from "./nav_bar_content";
import XIcon from "../../images/icons/x_svg.svg"
import { Image } from "../../elements/image";
import { isMobile } from "react-device-detect";
import { ContactUs, Partner } from "../../elements/button/know_more";

// import { Text } from "../../elements/text";

const NavBar = styled.nav`
    position: fixed;
    top: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    width: 100%;
    z-index: 1000;
    left: 0px;
    /* padding-left: 150px; */
    padding-right: 75px;
    background-color:#F5F5F5;
    @media (max-width:600px){
        background-color: #141414;
        opacity: 1;
        width: 100%;
        height:50px;
        right: 0;
        flex-direction: row;
        padding-right: 0px;
    }
`

const LogoLayout = styled(Link)`
    position: absolute;
    /* left:  45.6px; */
    height: 45px;
    /* margin-top: 45px; */
    padding:5px;
    left: 150px;
    cursor: pointer;
    /* align-items: left; */
    @media (max-width:600px){
        right: 20px;
        height:50px;
        margin-right: 70px;
        max-height: 50px;
        border-radius: 50px;
        margin-top: 0px;
        left: 10px;
        top: 11px;
        background-color: #1B1E1E;
    }
`

const LogoLayout2 = styled(Link)`
    left:  45.6px;
    height: 46px;
    margin-top: 25px;
    padding:5px;
    cursor: pointer;
    @media (max-width:600px){
        right: 20px;
        height:50px;
        margin-right: 70px;
        max-height: 50px;
        border-radius: 50px;
        margin-top: 0px;
        left: 10px;
        top: 11px;
        /* background-color: #1B1E1E; */
    }
`
const LogoLayout3 = styled(Link)`
    @media (max-width:600px){
        right: 20px;
        height:50px;
        margin-right: 70px;
        max-height: 50px;
        border-radius: 50px;
        margin-top: 0px;
        left: 10px;
        top: 11px;
        /* background-color: #1B1E1E; */
    }
`



const LogoLink2 = styled.img`
    /* background-color:green; */
    width: 38.8px;
    height: 56px;
    max-width: 38.8px;
    max-height: 56px;
    padding:5px;
    cursor: pointer;
    @media (max-width:600px){
        /* position: absolute; */
        /* left: 23px;
        top:13px; */
        width: 56px;
        height: 56px;
    }
`


const LogoLink3 = styled.img`
    /* background-color:green; */
    width: 38.8px;
    height: 56px;
    max-width: 38.8px;
    max-height: 56px;
    padding:5px;
    cursor: pointer;
    @media (max-width:600px){
        width: 40px;;
        height: 40px;
    }
`
const Bars = styled.img`
    width: 38.8px;
    height: 56px;
    max-width: 38.8px;
    max-height: 56px;
    /* margin:15px; */
    cursor: pointer;
    @media (max-width:600px){
        
        width: 24px;
        height: 24px;
        margin-top: 10px;
    }
`;

const LogoLink = styled.img`
    /* background-color:green; */
    width: 45px;
    height: 56px;
    max-width: 45px;
    max-height: 56px;
    padding:5px;
    cursor: pointer;
    @media (max-width:600px){
        position: absolute;
        left: 23px;
        top: 8px;
        width: 34px;
        height: 34px;
    }
`  

LogoLink.defaultProps = {
    src: logoImage,
  };
  

const MenuLink = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: baseline;
    align-items: baseline;
    max-width: 850px;
    position: relative;
    min-width: 800px;
    flex-wrap: wrap;
    margin-left: 300px;
    margin-top: 45px;
    flex: 120;
    flex-shrink: 1;
    text-decoration: none;
    @media (max-width:600px){
        position: fixed;
        width: 80%;
        height: 100%;
        background-color: black;
        display: flex;
        flex-direction: column;
        gap:30px;
        top: 0;
        max-width: 80%;
        margin-top: 0px;
        margin-left: 0px;
        padding-left: 15px;
        padding-top: 30px;
        /* position: absolute;
        
        left: 5px;
        display: flex;
        flex-direction: column;
        gap:30px;
        background-color: black;
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
        width: 100%;
        height: 100%;
        padding: 6rem 3rem 0;
        margin-top: 0px;
        z-index: 10000;
        transition: right 0.4s; */
    }
`
// Bars.defaultProps={
//     src:menuBars,
// };

const ProductInfoContainer  = styled.div`
    opacity: 0;
    position: absolute;
    top: 100%;
    width: 735px;
    padding: 15px;
    opacity: 0;
    margin-left: -20%;
    /* left: -20%; */
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
    &:hover, &:focus,&:hover:before{
        opacity: 1;
        visibility: visible;
        
    }
    @media (max-width:600px){
        display: none;
    }
`

const MenuItem = styled(Link)`
    color: #878383;
    flex: 1;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    margin-right: 40px;
    flex-shrink: 1;
    position: relative;
    transition: all .35s  ease-out;
    text-decoration: none;
    -webkit-transition: all 0.3s ease 0s; 
    @media (max-width:600px) {            
        /* margin-right: 10px; */
        padding-left: 10px;
        font-size: 16px;
        color: #878383;
        border-bottom-style: solid;
        border-bottom: 2px;
        border-bottom-color: #FFFFFF;
    }

    &:hover, &:focus {
        color: #1B1E1E;
        cursor: pointer;
        font-weight: 700;
        font-size: 16px;
        line-height: 21px;
        transition: all .35s ease;
        @media (max-width:600px) {            
            /* padding: 10px; */
            color: #FFFFFF;
            border-left: 1px;
            border-left-color: #FFFFFF;
            border-left-style: solid;
        }
    }
    &:hover+.ProductInfoContainer{
        opacity: 1;
        visibility: visible;
    }

    &:hover:before{
        content: "";
        position: absolute;
        background-color: black;
        height: 2px;
        width: 100%;
        top: 20px;
        margin-right: 40px;
        border-radius: 20PX;
        transition: all .85s ease;
        animation: animate .85s;
        
        @media (max-width:600px) {            
            /* padding: 10px; */
            color: #FFFFFF;
            border-left: 1px;
            border-left-color: #FFFFFF;
            border-left-style: solid;
        }
    }
    @keyframes animate {
         0% {
                width: 0;
            }

        100% {
                width: 100%;
             }
        }
        
`

const CloseIO = styled.div`
   @media (max-width:600px) {
        /* position: absolute;
        right: 70%;
        top: 50px; */
        padding-top: 10px;
        cursor: pointer;
   }
   @media(min-width: 700px) {
        display: none;
   }
`

const Divider = styled.div`
    @media(max-width: 600px){
        position: relative;
        height: 1px;
        width: 45%;
        background-color: #878383;
        /* margin-left: 47px;
        margin-right: 10px; */
    }
`

const TopContainer =styled.div`
   @media(min-width: 600px) {
        display: none;
   }
   @media(max-width: 600px){display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* align-items: center; */
    width: 40%;
    padding-left:20px;
    };

`

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    height: 100%;
    max-height: 100%;
    width: 300px;
    align-items: flex-end;
    justify-content: flex-end;
    margin-bottom: 25px;
    @media (max-width:600px){
        position: relative;
        width: 42%;
        max-height: 90px;
        height: 100%;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        margin-bottom: unset;
    }
`

const Container = styled.div`
    @media (min-width:600px){
        display: none;
    }
    
    @media (max-width: 600px) {
        position: sticky;
        position: -webkit-sticky;
        display: flex;
        flex-direction: row;
        width: 100%;
        margin-right: 20px;
        padding-left: 5px;
        justify-content: space-between;
        align-content: center;
    }
`

const GetLogoImage =()=>{
    if(isMobile){
        return moibleNestaLogo
    } else {
        return invertedLogoImage
    }
}


const Navbar=() => {

    var menuFlag = true
    if(isMobile){
        menuFlag = false
    }

    const [showNavBar, updateNavBar] = useState(menuFlag)
    const NavBarHandler = () => {
        if(isMobile) {
            updateNavBar(!showNavBar)
        }
        
    }


    
    return(<>
        <NavBar>
            <Container>
                <LogoLayout3 to="/">
                    <LogoLink3 src={whiteLogo} />
                </LogoLayout3>
                <Bars src={menuBars} onClick={NavBarHandler} />
            </Container>
           {showNavBar && 
           <LogoLayout to="/">
                <LogoLink src={GetLogoImage()} />
            </LogoLayout>}
            
        {showNavBar && (
            <MenuLink className="menu-link">
                <TopContainer >
                    <LogoLayout2 to="/" onClick={NavBarHandler}>
                        <LogoLink2 src={moibleMenuOpenNestaLogo}/>
                    </LogoLayout2>
                    <CloseIO onClick={NavBarHandler}>
                        <Image width="30px" height="30px" src={XIcon}/>
                    </CloseIO>
                </TopContainer>
                <Divider /> 
                <div>
                    <MenuItem to='/ville' onClick={NavBarHandler}>Nestaville</MenuItem>
                    <ProductInfoContainer className="ProductInfoContainer">
                        <ProductInfo product_info={ProductInformation}/>
                    </ProductInfoContainer>
                </div>
                <div>
                    <MenuItem to='/design' onClick={NavBarHandler}>Nesta Design</MenuItem>
                    <ProductInfoContainer className="ProductInfoContainer">
                        <ProductInfo product_info={NestaDesignInformation} />
                    </ProductInfoContainer>
                </div>
                <div>
                    <MenuItem  to='/decor' onClick={NavBarHandler}>Nesta Decor</MenuItem>
                </div>
                <Divider />
                {isMobile && <ButtonContainer>
                    <div style={{"width":"100%"}} onClick={NavBarHandler}>
                        <Partner />    
                    </div>
                    <div style={{"width":"100%"}} onClick={NavBarHandler}>
                        <ContactUs />
                    </div>
                </ButtonContainer>}

                {/* <Divider />
                
                <BottomContainer> 
                    <SmallText color="#878383" width="100%" height="auto">© 2024 Nesta Company</SmallText>
                </BottomContainer>   */}

            </MenuLink> )}
            {!isMobile && <ButtonContainer>
                <Partner />    
                <ContactUs />
            </ButtonContainer> }
            {/* {showNavBar &&
            <ButtonContainer>
                    <Partner/>
                    <ContactUs />
            </ButtonContainer> } */}
            
            {/* <LoginAlert>
                <NotificationButton></NotificationButton>
                <ShoppingCartButton></ShoppingCartButton>
                
            </LoginAlert> */}
        </NavBar>
       
    </>)

}

export default Navbar;