import React from 'react'
import Input from '../../components/Input'
import { Absolute, Body } from '../../styles/background'
import { Translatebutton } from '../../styles/button'
import { TranslateImage } from '../../styles/images'

export default function InputsContainer({
  lng,
  changeText,
  setChangeText,
  responseText,
  setResponseText,
  onChange,
  onSpeaker,
  listening
}) {
  return (
    <Body>
      <Input
        value={changeText}
        setValue={setChangeText}
        text={lng === true ? "English" : "Spanish"}
        onSpeaker={onSpeaker}
        listening={listening}
      />
      <Input
        top={20}
        text={lng !== true ? "English" : "Spanish"}
        control={true}
        value={responseText}
        setValue={setResponseText}
      />
      <Absolute>
        <Translatebutton onPress={() => onChange()} >
          <TranslateImage
            resizeMode="contain"
            source={require("../../asset/change.png")}
          />
        </Translatebutton>
      </Absolute>
    </Body>
  )
}