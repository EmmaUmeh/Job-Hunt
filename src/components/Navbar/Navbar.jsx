import { Container, Flex, HomeUrl, BlogUrl, PagesUrl, ListUrl, LogoUrl, CartUrl, } from "./Navbarstyle";
import { Navdatas } from "./Navdata";
import  LogoImage from '../../images/JobhuntLogo.svg';
import Button from "../Button/Button";

export default function Navbar() {

    return(
        <>
        <Container>
          
           {
        Navdatas.map(Navdata => (
            <Flex key={Navdata.id}>
            
               
                <LogoUrl>
                    <img src={LogoImage} alt={Navdata.LogoAlt}/>
                </LogoUrl>

             <ListUrl>
                <HomeUrl>{Navdata.HomeUrl}</HomeUrl>
                <PagesUrl>{Navdata.PagesUrl}</PagesUrl>

                <BlogUrl>{Navdata.FindJobUrl}</BlogUrl>
                
                <CartUrl>{Navdata.CartUrl}</CartUrl>

                <Button />
             </ListUrl>

            
            </Flex>
        ))
    }
           
        </Container>
        </>
    )
}