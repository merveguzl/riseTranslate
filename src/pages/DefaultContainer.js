import React, { useState, useEffect } from 'react'
import { White } from '../styles/background'
import HeaderContainer from "../pages/Container.js/HeaderContainer";
import InputsContainer from "../pages/Container.js/InputsContainer";
import { translate } from '../../APIModule/translate';

export default function DefaultContainer() {
  const [lng, setLng] = useState(false);
  const [changeText, setChangeText] = useState("");
  const [responseText, setResponseText] = useState("");

  const onChange = async () => {
    let response = await translate(changeText, lng);
    console.log("trab", response)
    setResponseText(response.translatedText)
  }

  useEffect(() => {
  }, []);

  return (
    <White>
      <HeaderContainer lng={lng} setLng={setLng} />
      <InputsContainer
        lng={lng}
        changeText={changeText}
        setChangeText={setChangeText}
        responseText={responseText}
        setResponseText={setResponseText}
        onChange={onChange}
      />
    </White>
  )
}