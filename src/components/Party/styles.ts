import styled from "styled-components";

export const PartyContainer = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PartyTitle = styled.h2`
  margin: 20px 0;
`;

export const PartyList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 16px;
  justify-content: center;

  @media only screen and (max-width: 1024px) {
    flex-direction: row;
  }
`;

export const RemovePoke = styled.button`
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 2rem;
  margin-left: 8px;
`;

export const PartyBox = styled.li`
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
  cursor: pointer;
  border: 1px solid #00c853;
  border-radius: 50px;
  background: #fff;
  -webkit-box-shadow: 5px 5px 7px 3px rgba(0, 0, 0, 0.33);
  box-shadow: 5px 5px 7px 3px rgba(0, 0, 0, 0.33);
  transition: all 100ms ease-in;

  &:hover ${RemovePoke} {
    display: block;
  }
`;

export const PokeInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const PokeName = styled.span`
  text-transform: capitalize;
`;

export const PartyInfo = styled.div`
  display: flex;
`;

export const PokeImg = styled.img``;
export const ImgDefault = styled.img``;
export const PokeLvl = styled.span``;
