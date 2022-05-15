import React from 'react'
import Input from '../../components/Input'
import { Body } from '../../styles/background'

export default function InputsContainer({
  lng, 
  changeText,
  setChangeText,
  responseText,
  setResponseText
}) {
  return (
    <Body>
      <Input 
        value={changeText}
        setValue={setChangeText}
        text={lng === true ? "İngilizce" : "Türkçe"}
      />
      <Input 
        top={20}
        text={lng !== true ? "İngilizce" : "Türkçe"}
        control = {true}
        value={responseText}
        setValue={setResponseText}
      />
    </Body>
  )
}