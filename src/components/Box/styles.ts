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
  font-family: "Poppins";
  border: none;
  background: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
  padding: 12px;
  border-radius: 20px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.5s ease;
  box-shadow: 5px 5px 7px 3px
    ${(props) => props.theme.colors.backgrounds.shadowBg};

  width: 50%;

  &:hover {
    background: ${(props) => props.theme.colors.purpleHover};
  }

  &:disabled {
    background: ${(props) => props.theme.colors.purpleHover};
    cursor: not-allowed;
  }
`;
