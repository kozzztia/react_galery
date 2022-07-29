
import './App.css';
import {useSelector} from "react-redux";
import Navigation from "./components/Navigation";
import {Route, Routes} from "react-router-dom";
import Page from "./components/page/Page";
import Main from "./components/Main";

function App() {
  const genres = useSelector(state => state.genres);
  const main = useSelector(state => state.main);
  return (
    <div className="App">
      <Navigation />
        <Routes>

          <Route path='/' element={<Main props={{main}}/>} />
          {
            genres.map(genre => <Route key={genre.id} path={`/${genre.name.split(" ").join("")}`} element={<Page props={genre}/>}/>)
          }

        </Routes>
    </div>
  );
}

export default App;
