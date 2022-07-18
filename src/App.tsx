import { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { REPOSITORY, SERVICE } from "./api";
import { Box, Layout, Party } from "./components";
import { PokeContextType, PokeContext } from "./context";
import { Content, Header, AppTitle } from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

function App() {
  const { dispatch } = useContext<PokeContextType>(PokeContext);

  useEffect(() => {
    async function getData() {
      const stored = REPOSITORY.getData();

      if (stored) {
        dispatch({ type: "SET_LIST", pokeList: stored.list });
        dispatch({ type: "SET_PARTY", pokeParty: stored.party });
        return;
      }

      const { list, party, hasError, errorMessage } =
        await SERVICE.getAllPokemons();

      if (hasError) {
        toast.error(errorMessage, {
          position: toast.POSITION.TOP_RIGHT,
        });

        return;
      }

      dispatch({ type: "SET_LIST", pokeList: list });
      dispatch({ type: "SET_PARTY", pokeParty: party });
    }

    getData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Header>
          <AppTitle>PokéCenter</AppTitle>
        </Header>
        <Content>
          <Party />
          <Box />
        </Content>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
