import styled from "styled-components";
import color from "../UI/color";
import { Dimensions } from "react-native";

const White = styled.View`
    background-color: ${color.white};
    height: 100%;
    width:100%;
`;

const HeaderBack = styled.View`
    height: ${Dimensions.get("window").height * 10 / 100}px;
    background-color: ${color.purple};
    width: 100%;
`;

const Body = styled.View`
    width : 100%;
    padding-horizontal : 5%;
`;

const InputBody = styled.View`
    width : 100%;
    height: 110px;
    margin-top : ${props => (props.top !== undefined ? props.top : 100)}px;
`;

export {
    White,
    HeaderBack,
    Body,
    InputBody
}