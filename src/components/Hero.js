import React from 'react'
import { View, Text } from 'react-native'

import styled from 'styled-components/native'

import { Feather, Ionicons } from '@expo/vector-icons'

const Container = styled.View`
  position: absolute;
  width: 100%;
  align-items:center;
  bottom: 8px;
`
const Banner = styled.Image`
  height: 100px;
`


const Hero = () => {
   return (
       <Container>
           <Banner resizeMode="contain" source={require('../images/banner.png')} />
           <Text> Hero </Text>
       </Container>
   )
}

export default Hero