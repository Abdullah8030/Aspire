import React, { useState } from 'react';
import { FaArrowCircleLeft,FaArrowCircleRight } from 'react-icons/fa';

const slideImages = [
    {
     image:   
    '/img/portfolio/05-large.jpg'
    },
    {
     image:   
    '/img/portfolio/09-large.jpg'
    },
    {
     image:   
    '/img/portfolio/03-large.jpg'
    }
  ];

export const CustomSlider = () => {

    const [current,setCurrent] = useState(0);
    const length = slideImages.length;
    
    if (!Array.isArray(slideImages) || slideImages.length <= 0) {
      return null;
    }

    const nextSlide = () => {
      setCurrent(current === length-1 ? 0:current + 1);
    }

    const prevSlide = () => {
      setCurrent(current === 0 ? length-1:current - 1);
    }

    const moveToDot = (index) => {
          setCurrent(index);
    }

    return (
      <section className="slider">
          <FaArrowCircleLeft className="left-arrow"  onClick={prevSlide} />
          <FaArrowCircleRight className="right-arrow" onClick={nextSlide} />
          {slideImages.map((slide,index)=>{
            return (
                <div className={ index === current ? 'slide-active' : "slide-off" } key={index}>
                    {index === current && (<img src={slide.image} className="image" alt="None"/>)}
                </div>
            )
              
        })}

          <div className="container-dots" >
                {Array.from({length: slideImages.length}).map((item, index) => (
                  <div className={current === index ? "dot-active" : "dot"} onClick={() => moveToDot(index)}></div>
                ))}
            </div>  

      </section>    
    );
}

export default CustomSlider;