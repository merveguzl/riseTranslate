import styled from "styled-components";
import color from "../UI/color";

const WhiteText = styled.Text`
    color: ${color.white};
    font-size: 15px;
    text-align:center;
    align-items: center;
    padding-vertical: 5%;
`;

const LngContainer = styled.View`
    width: 90%;
    margin-horizontal: 5%;
    background-color: ${color.white};
    height:80px;
    border-color: ${color.purple};
    border-width:1px;
    border-radius: 5px;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
`;

const PurpleText = styled.Text`
    color: ${color.purple};
    font-size:15px;
    width:40%;
    text-align:center;
`;

const GreyText = styled.Text`

`;


export{
    WhiteText,
    LngContainer,
    PurpleText,
    GreyText
}
