import React from "react";
import Navbar from "./Navbar";
import {
  CCarousel,
  CCarouselCaption,
  CCarouselItem,
  CImage,
} from "@coreui/react";

const HeroSection = () => {
  return (
    <section className="" id="heroSection">
      <Navbar />
      <CCarousel controls indicators dark>
        <CCarouselItem>
          <CImage
            className="d-block w-100"
            src="/skinandyou/carousel1.jpg"
            alt="slide 1"
          />
          <CCarouselCaption className="caption-bottom-right">
            <a href="#form" class="btn btn-info" role="button">
              Book An Appointment
            </a>
          </CCarouselCaption>
        </CCarouselItem>
        <CCarouselItem>
          <CImage
            className="d-block w-100"
            src="/skinandyou/carousel2.jpg"
            alt="slide 2"
          />
          <CCarouselCaption className="caption-bottom-right">
            <a href="#form" class="btn btn-info" role="button">
              Book An Appointment
            </a>
          </CCarouselCaption>
        </CCarouselItem>
        <CCarouselItem>
          <CImage
            className="d-block w-100"
            src="/skinandyou/carousel3.jpg"
            alt="slide 3"
          />
          <CCarouselCaption className="caption-bottom-right">
            <a href="#form" class="btn btn-info" role="button">
              Book An Appointment
            </a>
          </CCarouselCaption>
        </CCarouselItem>
      </CCarousel>
    </section>
  );
};

export default HeroSection;
