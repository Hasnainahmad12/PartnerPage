import React from 'react'
import World from '../components/World'
import PersonalCom from '../components/PersonalCom'
import WorldWideCom from '../components/WorldWideCom'
import Experiance from '../components/Experiance'
import HeaderCom from '../components/HeaderCom'
import Navbar from '../components/Navbar'
import OurPartner from '../components/OurPartner'

const Partner = () => {
  return (
    <>
        <Navbar />
        <HeaderCom />
        <Experiance />
        <OurPartner />
        <WorldWideCom />
        <PersonalCom />
        <World />
    </>
  )
}

export default Partner