import { View, Text } from 'react-native'
import React from 'react'
import { HeaderBack } from '../../styles/background'
import { LngContainer, PurpleText, WhiteText } from '../../styles/text'
import { Translatebutton } from '../../styles/button'
import { TranslateImage } from '../../styles/images'

export default function HeaderComponent({
    setLng,
    lng
}) {
  return (
    <HeaderBack>
        <WhiteText>Translate App</WhiteText>
        <LngContainer>
            <PurpleText>
               {lng === true ? "İngilizce" : "Türkçe"}
            </PurpleText>
            <Translatebutton onPress = {()=>setLng(!lng)} >
                <TranslateImage 
                    resizeMode = "contain"
                    source={require("../../asset/change.png")}
                />
            </Translatebutton>
            <PurpleText>
                {lng !== true ? "İngilizce" : "Türkçe"}
            </PurpleText>
        </LngContainer>
    </HeaderBack>
  )
}