import style from './App.module.css';
import Header from "./components/Header/Header";
import MainPageContainer from './components/MainPage/MainPageContainer';
import FilmCardContainer from './components/FilmCard/FilmCardContainer';
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <div className={style.container}>
            <Route exact path="/" component={MainPageContainer}/>
            <Route path="/film" component={FilmCardContainer}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
