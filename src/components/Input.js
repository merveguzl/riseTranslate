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
        placeholder={control !== true ? "Çevirmek istediğiniz kelimeyi yazınız..." : ""}
        placeholderTextColor={color.grey}
        multiline={true}
      />
    </InputBody>

  )
}