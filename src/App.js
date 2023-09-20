import Home from "./COMPONENTS/Home";
import React,{useState} from 'react'
import Questions from "./COMPONENTS/Questions";
import Results from "./COMPONENTS/Results";

export const pageContext = React.createContext();

function App() {
  const [page,setPage] = useState("homepage")
  const [score,setScore] = useState(0);
  return (
    <div>
      <pageContext.Provider value={{setPage: setPage,score: score,setScore: setScore}}>
        {page === "homepage" && <Home/>}
        {page === "questions" && <Questions/>}
        {page === "results" && <Results/>}
      </pageContext.Provider>
    </div>
  );
}

export default App;
