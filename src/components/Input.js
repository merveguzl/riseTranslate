import React from 'react'
import { Absolute, InputBody, Voice } from '../styles/background'
import { GreyText } from '../styles/text'
import { Input as TextInput } from "../styles/input";
import color from '../UI/color';
import { Translatebutton } from '../styles/button';
import { TranslateImage } from '../styles/images';

export default function Input({
  text,
  value,
  setValue,
  top,
  control,
  onSpeaker,
  listening
}) {
  return (
    <InputBody top={top} testID="changeInput" >
      <GreyText>
        {text}
      </GreyText>
      <TextInput
        editable={control !== true ? true : false}
        value={value}
        onChangeText={(text) => setValue(text)}
        placeholder={control !== true ? "Type the word you want to translate..." : ""}
        placeholderTextColor={color.grey}
        multiline={true}
      />
      {
        control !== true &&
        <Voice>
          <Translatebutton onPress={() => onSpeaker()} >
            <TranslateImage
              resizeMode="contain"
              source={ listening === false ? require("../asset/microphone.png") : {uri:"https://c.tenor.com/NqKNFHSmbssAAAAj/discord-loading-dots-discord-loading.gif"}}
            />
          </Translatebutton>
        </Voice>
      }

    </InputBody>

  )
}