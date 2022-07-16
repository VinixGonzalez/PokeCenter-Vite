import React from "react";

import { Container } from "./styles";

interface Props {
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  return <Container>{children}</Container>;
};
