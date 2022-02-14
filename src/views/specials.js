import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import SpecialsS1 from "../components/specials-s1";
import SpecialsS2 from "../components/specials-s2";
import SpecialsS3 from "../components/specials-s3";
import SpecialsS4 from "../components/specials-s4";

class Specials extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <SpecialsS1/>
                <SpecialsS2/>
                <SpecialsS3/>
                <SpecialsS4/>
            </Container>    
        );
    }
}

export default Specials;