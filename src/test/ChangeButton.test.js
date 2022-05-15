import React from 'react';
import {render, fireEvent} from "@testing-library/react-native";
import InputComponent from "../pages/Component/InputComponent";

describe('changeButton', ()=>{
    it("should go to changeButton", () =>{
        const element = render(<InputComponent />);
        const subInputElement = element.getByTestId("changeButton");
        fireEvent.press(subInputElement);
    })
})