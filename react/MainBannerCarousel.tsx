import React from 'react'

import MyFullSession from './components/session/MyFullSession'
import MyLazyFullSession from './components/session/MyLazyFullSession'
import MyRenderSession from './components/session/MyRenderSession'
import MyUpdateSession from './components/session/MyUpdateSession'
import MyUpdateSessionInline from './components/session/MyUpdateSessionInline'

function MainBannerCarousel() {
  return (
    <>
      <MyFullSession />
      <MyLazyFullSession />
      <MyRenderSession />
      <MyUpdateSession />
      <MyUpdateSessionInline />
    </>
  )
}

MainBannerCarousel.schema = {
  title: 'Main Banner Carousel',
}

export default MainBannerCarousel
