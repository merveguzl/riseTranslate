import React, { useState } from 'react'
import { White } from '../styles/background'
import HeaderContainer from "../pages/Container.js/HeaderContainer";
import InputsContainer from "../pages/Container.js/InputsContainer";

export default function DefaultContainer() {
  const [lng, setLng] = useState(false);
  const [changeText, setChangeText] = useState("");
  const [responseText, setResponseText] = useState("");

  return (
    <White>
      <HeaderContainer lng={lng} setLng={setLng} />
      <InputsContainer
        lng={lng}
        changeText={changeText}
        setChangeText={setChangeText}
        responseText={responseText}
        setResponseText={setResponseText} />
    </White>
  )
}