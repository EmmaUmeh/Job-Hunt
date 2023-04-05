import { Container, Flex, HomeUrl, BlogUrl, PagesUrl, ListUrl, LogoUrl, CartUrl, ToggleButton} from "./Navbarstyle";
import { Navdatas } from "./Navdata";
import  LogoImage from '../../images/JobhuntLogo.svg';
import Button from "../Button/Button";
import {BiMenu, BiX} from "react-icons/bi"
import { useState } from "react";

export default function Navbar() {

    const [toggle, setToggle] = useState(false)
    const HandleClick = () => setToggle(!toggle);
    return(
        <>
        <Container>
          
           {
        Navdatas.map(Navdata => (
            <Flex key={Navdata.id}>
            
               
                <LogoUrl>
                    <img src={LogoImage} alt={Navdata.LogoAlt}/>
                </LogoUrl>

             <ListUrl primary>
                <HomeUrl>{Navdata.HomeUrl}</HomeUrl>
                <PagesUrl>{Navdata.PagesUrl}</PagesUrl>

                <BlogUrl>{Navdata.FindJobUrl}</BlogUrl>
                
                <CartUrl>{Navdata.CartUrl}</CartUrl>

                <Button />
             </ListUrl>



            <ToggleButton onClick={HandleClick}>
                {
                    toggle 
                    ?
                    <BiX size="40px"/>
                    :
                <BiMenu size="40px"/>
                }
            </ToggleButton>

            </Flex>
        ))
    }
           
        </Container>
        </>
    )
}