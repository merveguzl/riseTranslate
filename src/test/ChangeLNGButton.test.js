import React from 'react';
import {render, fireEvent} from "@testing-library/react-native";
import HeaderComponent from '../pages/Component/HeaderComponent';

describe('changeLNGButton', ()=>{
    it("should go to changebutton", () =>{
        const element = render(<HeaderComponent />);
        const subInputElement = element.getByTestId("changeLNGButton");
        fireEvent.press(subInputElement);
    })
})