import React from 'react'
import HeaderComponent from '../Component/HeaderComponent'

export default function HeaderContainer({lng, setLng}) {
  return (
    <HeaderComponent lng={lng} setLng={()=>setLng(!lng)} />
  )
}