
import styled from "styled-components";
import logoImage from '../../images/logo/logo.png'
import { NavLink as Link } from 'react-router-dom';
import React, {useState }  from 'react';
import menuBars from "../../images/menu/menu.png"
import invertedLogoImage from '../../images/logo/invert_logo.png'

const NavBar = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 100px;
    width: 100%;
    z-index: 1;
    left: 0;
    background-color:#F5F5F5;
    @media (max-width:600px){
        background-color: white;
    }
`

const LogoLayout = styled.div`
    position: absolute;
    left:  45.6px;
    height: 46px;
    margin-top: 25px;
    padding:5px;
    @media (max-width:600px){
        right: 20px;
        height:62px;
        width: 95%;
        margin-right: 70px;
        max-height: 62px;
        border-radius: 50px;
        margin-right: 70px;
        margin-top: 0px;
        left: 10px;
        right: 0px;
        top: 11px;
        background-color: #1B1E1E;
    }
`
export const Bars = styled.img`
  display: none;
  color: #808080;
  @media screen and (max-width: 600px) {
    display: block;
    position: absolute;
    max-width: 24px;
    max-height: 34px;
    margin-top: 0px;
    top: 5px;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const LogoLink = styled.img`
    /* background-color:green; */
    width: 38.8px;
    height: 46px;
    max-width: 38.8px;
    max-height: 46px;
    padding:5px;
    @media (max-width:600px){
        position: absolute;
        left: 23px;
        top:13px;
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
    margin-left: 200px;
    margin-top: 45px;
    flex: 120;
    flex-shrink: 1;
    text-decoration: none;
    @media (max-width:600px){
        float: none;
        position: absolute;
        text-align: center;
        display: block;
        background-color: black;
        height: 400px;
        border-radius: 5px;
        right: 10px;    
        margin-top: 90px;
        width: 160px;
        min-width: 80px;
        /* max-width: 1050px; */
        max-height: 500px;
        color: black;
    }
`
Bars.defaultProps={
    src:menuBars,
};

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
        margin: 10px;
        color: #FFFFFF;
    }
    &:hover, &:focus{
        color: #1B1E1E;
        cursor: pointer;
        font-weight: 700;
        font-size: 16px;
        line-height: 21px;
        transition: all .35s ease;
        @media (max-width:600px) {            
            margin: 10px;
            color: #FFFFFF;
        }
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
            margin: 10px;
            color: #FFFFFF;
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

const Navbar=() => {

    const [showNavBar, updateNavBar] = useState(false)
    
    const NavBarHandler = () => {
        updateNavBar(!showNavBar)
    }
    
    return(<>
        <NavBar>
            <LogoLayout>
                <LogoLink srcSet={`${invertedLogoImage} 300w, ${invertedLogoImage} 768w, ${invertedLogoImage} 1280w`} />
            </LogoLayout>
            {/* <Bars onClick={NavBarHandler} /> */}
        {showNavBar && (<MenuLink className="menu-link">
                {/* <div>
                    <MenuItem to='/ville' >Nesta Ville</MenuItem>
                </div> */}
                <div>
                    <MenuItem to='/design'> Nesta Designs</MenuItem>
                </div>
                {/* <div>
                    <MenuItem>Nesta MarketPlace</MenuItem>
                </div>
                <div>
                    <MenuItem>Nesta Sense</MenuItem>
                </div>
                <div>
                    <MenuItem>Nesta Xplorer</MenuItem>         
                </div> */}
            </MenuLink> )}       
            {/* <LoginAlert>
                <NotificationButton></NotificationButton>
                <ShoppingCartButton></ShoppingCartButton>
                <LoginButton>Login</LoginButton>
            </LoginAlert> */}
        </NavBar>
    </>)

}

export default Navbar;