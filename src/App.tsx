import { useContext, useEffect } from "react";
import { SERVICE } from "./api/service";
import { REPOSITORY } from "./api/repository";
import { Box } from "./components/Box";
import { Layout } from "./components/Layout";
import { Party } from "./components/Party";
import { PokeContextType } from "./context/models";
import { PokeContext } from "./context/pokeContext";
import { Content } from "./styles/GlobalStyles";
import { toast } from "react-toastify";

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
          position: toast.POSITION.TOP_CENTER,
        });

        return;
      }

      dispatch({ type: "SET_LIST", pokeList: list });
      dispatch({ type: "SET_PARTY", pokeParty: party });
    }

    getData();
  }, []);

  return (
    <Layout>
      <header>
        <h1 style={{ textAlign: "center" }}>Pokecenter</h1>
      </header>
      <Content>
        <Party />
        <Box />
      </Content>
    </Layout>
  );
}

export default App;
