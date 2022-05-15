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

const Absolute = styled.View`
    position: absolute;
    height:50px;
    width:50px;
    bottom:-50px;
    right:10px;
    background-color:${color.white};
    border-radius:50px;
    padding:5px;
    align-items:center;
    border-width:1px;
    border-color:${color.purple}
`;

export {
    White,
    HeaderBack,
    Body,
    InputBody,
    Absolute
}