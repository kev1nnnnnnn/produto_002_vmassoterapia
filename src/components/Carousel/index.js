import React from 'react'
// import {Carousel } from 'react-bootstrap';
import InfiniteCarousel from 'react-leaf-carousel'

import * as C from './styles'
import img from '../../assets/images/navbar.png'


import { Container } from 'react-bootstrap'

export function Carousel() {

  return (
    <Container>
      <C.Title>Massages realizadas:</C.Title>

      <InfiniteCarousel
        breakpoints={[
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          }
        ]}
        dots={true}
        showSides={true}
        sidesOpacity={0.5}
        sideSize={0.1}
        slidesToScroll={4}
        slidesToShow={3}
        scrollOnDevice={true}
      >
        <div>
          <C.Image alt="" src={img} />
        </div>
        <div>
          <C.Image alt="" src={img} />
        </div>
        <div>
          <C.Image alt="" src={img} />
        </div>
        <div>
          <C.Image alt="" src={img} />
        </div>
      </InfiniteCarousel>
    </Container>
  )
}