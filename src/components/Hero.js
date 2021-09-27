import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components/macro";
import { SliderData } from "../Data/SliderData";
import { Button } from "../styles/Button";
import { IoMdArrowForward } from "react-icons/io";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";

const HeroContainer = styled.div`
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const HeroWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const HeroSlider = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 0.3) 100%
    );
  }
`;
const HeroImg = styled.img`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
`;
const HeroText = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  width: calc(100% - 100px);
  color: #fff;

  h1 {
    font-size: calc(1rem, 8vh, 2.5rem);
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
    text-align: left;
    margin-bottom: 0.8rem;
  }

  p {
    margin-bottom: 1.2rem;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.9);
  }
`;
const Arrow = styled(IoMdArrowForward)`
  margin-left: 0.5rem;
`;
const SliderBtn = styled.div`
  position: absolute;
  right: 50px;
  bottom: 50px;
  display: flex;
  z-index: 10;
`;
const arrowBtns = css`
  width: 50px;
  height: 50px;
  color: #ffffff;
  cursor: pointer;
  background-color: #000d1a;
  border-radius: 50%;
  padding: 10px;
  margin-right: 1rem;
  user-select: none;
  transition: 0.3s;

  &:hover {
    color: #cd853f;
    transform: scale(1.05);
  }
`;

const PrevArrow = styled(IoArrowBack)`
  ${arrowBtns}
`;
const NextArrow = styled(IoArrowForward)`
  ${arrowBtns}
`;

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;
  const timeout = useRef(null);

  useEffect(() => {
    const nxtSlide = () => setCurrent(current === length - 1 ? 0 : current + 1);

    timeout.current = setTimeout(nxtSlide, 3000);

    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);

  const nxtSlide = () => setCurrent(current === length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1);

  return (
    <HeroContainer>
      <HeroWrapper>
        {SliderData.map((item, index) => {
          return (
            <HeroSlider key={index}>
              {index === current && (
                <>
                  <HeroImg src={item.image} alt={item.alt} />
                  <HeroText>
                    <h1>{item.title}</h1>
                    <p>{item.price}</p>
                    <Button
                      to="item.path"
                      primary="true"
                      css={`
                        max-width: 160px;
                      `}
                    >
                      {item.label}
                      <Arrow />
                    </Button>
                  </HeroText>
                </>
              )}
            </HeroSlider>
          );
        })}
        <SliderBtn>
          <PrevArrow onClick={prevSlide} />
          <NextArrow onClick={nxtSlide} />
        </SliderBtn>
      </HeroWrapper>
    </HeroContainer>
  );
};

export default Hero;
