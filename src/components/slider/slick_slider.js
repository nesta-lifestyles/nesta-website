import React, { Component, useEffect, useState } from 'react'
import Slider from 'react-slick'
import "./slider.css"
import styled from 'styled-components';
import { TestinmonialLayout } from '../../layouts/home_page_layouts/testimonial_layout';

const Container = styled.div`
    width: 100%;
    height: 100%;
    padding-left: 90px;
    padding-right: 90px;
    @media (max-width: 600px) {
        padding-left: 0px;
        padding-right: 0px;
    }
`

export const TestimonialComponent = (props) => {
    var settings = {
        infinite: false,
        centerMode:true,
        // speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        autoplay:true,
        autoplayspeed:1,
        responsive: [
            {
              breakpoint: 480, // Small mobile
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 600, // Larger mobile
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
              }
            },
            {
              breakpoint: 700, // Small tablets
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
              }
            },
            {
              breakpoint: 800, // Small tablets/large phones
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
              }
            },
            {
              breakpoint: 900, // Tablets
              settings: {
                slidesToShow: 1.2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 1000, // Small laptops
              settings: {
                slidesToShow: 1.3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 1100, // Laptops
              settings: {
                slidesToShow: 1.4,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 1200, // Larger laptops
              settings: {
                slidesToShow: 1.5,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 1300, // Smaller desktop monitors
              settings: {
                slidesToShow: 1.6,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 1400, // 14-inch monitors
              settings: {
                slidesToShow: 1.7,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 1500, // Larger desktops
              settings: {
                slidesToShow: 1.8,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 1600, // 16-inch monitors
              settings: {
                slidesToShow: 1.9,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 1700, // Wide monitors
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 1800, // Ultra-wide displays
              settings: {
                slidesToShow: 2.1,
                slidesToScroll: 2,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 1900, // Full HD wide screens
              settings: {
                slidesToShow: 2.2,
                slidesToScroll: 2,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 2000, // Very large displays
              settings: {
                slidesToShow: 2.3,
                slidesToScroll: 2,
                infinite: true,
                dots: false
              }
            }
          ]       
      };
      return (
        <div className="slider-container">
          <Slider {...settings}>
            {
                props.testimonials.map(testimonial => <div>
                    <TestinmonialLayout testimonial={testimonial} />
                </div>)
            }
          </Slider>
        </div>
      );
  };