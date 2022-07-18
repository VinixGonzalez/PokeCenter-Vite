import { Container } from "./styles";

interface Props {
  children: React.ReactNode;
}

export const Layout: React.FunctionComponent<Props> = ({ children }) => {
  return <Container data-testid="layoutContainer">{children}</Container>;
};
