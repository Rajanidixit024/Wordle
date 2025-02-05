import { useEffect, useState } from "react";

import axios from "axios";
import Wordle from "./components/Wordle";

function App() {
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    const endpointSol = "https://random-word-api.herokuapp.com/word?length=5";

    async function getSolution() {
      try {
        const response = await axios.get(endpointSol);
        setSolution(response.data[0]);
        console.log(response.data);
      } catch (error) {
        console.log("somry");
      }
    }
    getSolution();
  }, []);

  return (
    <div className="app">
      <h1 className="logo">Wordle</h1>
      {solution && <Wordle solution={solution} />}
    </div>
  );
}

export default App;
