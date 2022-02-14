import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import MethodS1 from "../components/method-s1";
import MethodS2 from "../components/method-s2";
import MethodS3 from "../components/method-s3";
import MethodS4 from "../components/method-s4";

class Method extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <MethodS1/>
                <MethodS2/>
                <MethodS3/>
                <MethodS4/>
            </Container>    
        );
    }
}

export default Method;