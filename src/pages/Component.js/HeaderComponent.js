import { View, Text } from 'react-native'
import React from 'react'
import { HeaderBack } from '../../styles/background'
import { LngContainer, PurpleText, WhiteText } from '../../styles/text'
import { Translatebutton } from '../../styles/button'
import { TranslateImage } from '../../styles/images'

export default function HeaderComponent() {
  return (
    <HeaderBack>
        <WhiteText>Translate App</WhiteText>
        <LngContainer>
            <PurpleText>
                İngilizce
            </PurpleText>
            <Translatebutton>
                <TranslateImage 
                    source={require("../../asset/change.png")}
                />
            </Translatebutton>
            <PurpleText>
                Türkçe
            </PurpleText>
        </LngContainer>
    </HeaderBack>
  )
}