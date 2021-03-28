import style from './App.module.css';
import Header from "./components/Header/Header";
import MainPageContainer from './components/MainPage/MainPageContainer';
import FilmCardContainer from './components/FilmCard/FilmCardContainer';
import { BrowserRouter, Route } from "react-router-dom";
import SearchPageContainer from './components/SearchPage/SearchPageContainer';
import LocalSorage from "./components/LocalStorage/LocalStorage";


function App() {
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <div className={style.appContainer}>
          <LocalSorage/>
          <div className={style.container}>
              <Route exact path="/" component={MainPageContainer}/>
              <Route path="/film" component={FilmCardContainer}/>
              <Route path="/search" component={SearchPageContainer}/>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
