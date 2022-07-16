import styled from "styled-components";

export const MainContainer = styled.main`
  max-width: 600px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

export const BoxTitle = styled.h2`
  text-align: center;
  margin-top: 20px;
`;

export const BoxContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: center;
`;

export const UpdateBox = styled.button`
  border: none;
  background: #000;
  color: #fff;
  padding: 12px;
  border-radius: 20px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.5s ease;

  width: 50%;

  &:hover {
    background: #40008090;
  }

  &:disabled {
    background: #40008090;
    cursor: not-allowed;
  }
`;
