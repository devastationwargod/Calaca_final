import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
const images = require.context('../images', true);

function ControlledCarousel(props) {
return (
    <Carousel activeIndex={props.activeIndex} 
     controls={false} indicator={false} interval>
     {props.cursos.map(curso=>(<Carousel.Item>
      <img
         className = "d-block w-10"
         src={images(`./${curso.imagen}`)}
         />
         
    </Carousel.Item>))}
    </Carousel>
  );

}

export default ControlledCarousel;

