import React, { useState, useEffect } from 'react'
import { White } from '../styles/background'
import HeaderContainer from "../pages/Container/HeaderContainer";
import InputComponent from "../pages/Component/InputComponent";
import { translate } from '../../APIModule/translate';
import Voice from '@react-native-voice/voice';

export default function DefaultContainer() {
  const [lng, setLng] = useState(false);
  const [changeText, setChangeText] = useState("");
  const [responseText, setResponseText] = useState("");
  const [listening, setListening] = useState(false);

  useEffect(() => {
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechVolumeChanged = onSpeechVolumeChanged;
    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const onChange = async (text) => {
    if (text !== undefined) {
      let response = await translate(text, lng);
      console.log("trab", response)
      setResponseText(response.translatedText)
    } else {
      let response = await translate(changeText, lng);
      console.log("trab", response)
      setResponseText(response.translatedText)
    }
  }

  const onSpeaker = () => {
    console.log("girdiii")
    if (listening === true) {
      setListening(false);
      stopRecognizing();
    } else {
      setListening(true);
      startRecord();
    }
  }

  const startRecord = async () => {
    try {
      await Voice.start(lng === true ? 'en-US' : 'es');
    } catch (e) {
      console.error(e);
    }
  }

  const onSpeechError = (e) => {
    console.log('onSpeechError: ', e);
    startRecord();
  };

  const onSpeechResults = (e) => {
    console.log('onSpeechResults: ', e);
    setChangeText(e.value[0])
    stopRecognizing(e.value[0]);
  };

  const onSpeechVolumeChanged = (e) => {
    console.log('onSpeechVolumeChanged: ', e);
  };

  const stopRecognizing = async (text) => {
    setListening(false);
    onChange(text);
    try {
      await Voice.stop();

    } catch (e) {

    }
  };

  return (
    <White>
      <HeaderContainer lng={lng} setLng={setLng} />
      <InputComponent
        listening={listening}
        lng={lng}
        changeText={changeText}
        setChangeText={setChangeText}
        responseText={responseText}
        setResponseText={setResponseText}
        onChange={onChange}
        onSpeaker={onSpeaker}
      />
    </White>
  )
}