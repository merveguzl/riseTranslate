import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import DefaultContainer from './src/pages/DefaultContainer'
import { Safe } from './src/styles/app'

export default function App() {
  return (
    <Safe>
      <DefaultContainer />
    </Safe>
  )
}