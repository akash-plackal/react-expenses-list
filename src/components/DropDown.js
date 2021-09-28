import React from "react";
import styled from "styled-components";
import { MenuData } from "../Data/MenuData";
import { FaTimes } from "react-icons/fa";
// import { Link } from "react-router-dom";
import { Button } from "../styles/Button";

const DropDownContainer = styled.div`
  background-color: #cd853f;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 999;
  transition: 0.2s ease-in-out;
  opacity: ${({ IsOpen }) => (IsOpen ? "1" : "0")};
  top: ${({ IsOpen }) => (IsOpen ? "0" : "-100%")};
`;

const IconDiv = styled.div`
  position: absolute;
  top: 1.1rem;
  right: 1.5rem;
`;
const CloseIcon = styled(FaTimes)`
  color: #000d1a;
  font-size: 2rem;
`;
const DropDownMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #fff;
  cursor: pointer;
  transition: 0.2s ease-in-out;
`;
const DropDownLink = styled.div`
  height: 15vh;
  font-size: 1.5rem;
  &:hover {
    color: #000d1a;
  }
`;
const BtnDiv = styled.div``;

const DropDown = ({ toggle, IsOpen }) => {
  // const IconDiv = styled.div``;

  return (
    <DropDownContainer IsOpen={IsOpen} onClick={toggle}>
      <IconDiv onClick={toggle}>
        <CloseIcon />
      </IconDiv>
      <DropDownMenu>
        {MenuData.map((item, index) => (
          <DropDownLink to={item.link} key={index}>
            {item.title}
          </DropDownLink>
        ))}
      </DropDownMenu>
      <BtnDiv>
        <Button to="/contact" primary="true" big="true">
          Contact Us
        </Button>
      </BtnDiv>
    </DropDownContainer>
  );
};

export default DropDown;
