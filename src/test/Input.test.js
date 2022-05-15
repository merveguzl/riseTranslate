import React from 'react';
import {render, fireEvent} from "@testing-library/react-native";
import Input from '../components/Input';

describe('input', ()=>{
    it("should go to input", () =>{
        const element = render(<Input />);
        const subInputElement = element.getByTestId("changeInput");
        fireEvent.press(subInputElement);
    })
})