import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? "#000d1a" : "#CD853F")};
  white-space: nowrap;
  outline: none;
  border: none;
  min-width: 6.25rem;
  min-width: 12.5rem;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ big }) => (big ? "16px 40px" : "15px 10px")};
  color: ${({ primary }) => (primary ? "#fff" : "#000d1a")};
  font-size: ${({ big }) => (big ? "20px" : "14px")};

  &:hover {
    transform: translateY(-2px);
  }
`;
