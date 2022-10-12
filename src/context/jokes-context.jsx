import { createContext, useContext, useState } from "react";

const JokesContext = createContext();

function JokeProvider({ children }) {
  const [myJokes, setMyJokes] = useState([]);
 

  return (
    <JokesContext.Provider
      value={{ myJokes, setMyJokes }}
    >
      {children}
    </JokesContext.Provider>
  );
}

function useJokes() {
  const context = useContext(JokesContext);
  if (context === undefined) {
    throw new Error(`useJokes must be used within a JokeProvider`);
  }
  return context;
}

export { JokeProvider, useJokes };
