import styled from "styled-components";
import color from "../UI/color";
import {Dimensions} from "react-native";

const White = styled.View`
    background-color: ${color.white};
    height: 100%;
    width:100%;
`;

const HeaderBack = styled.View`
    height: ${Dimensions.get("window").height*10/100}px;
    background-color: ${color.purple};
    width: 100%;
`;


export{
    White,
    HeaderBack
}