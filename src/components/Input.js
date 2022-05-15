import React from 'react'
import { InputBody } from '../styles/background'
import { GreyText } from '../styles/text'
import { Input as TextInput } from "../styles/input";
import color from '../UI/color';

export default function Input({
  text,
  value,
  setValue,
  top,
  control
}) {
  return (
    <InputBody top={top} >
      <GreyText>
        {text}
      </GreyText>
      <TextInput
        editable={control !== true ? true : false}
        value={value}
        onChangeText={(text)=>setValue(text)}
        placeholder={control !== true ? "Type the word you want to translate..." : ""}
        placeholderTextColor={color.grey}
        multiline={true}
      />
    </InputBody>

  )
}