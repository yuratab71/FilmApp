import style from './App.module.css';
import Header from "./components/Header/Header";
import MainPageContainer from './components/MainPage/MainPageContainer';
import FilmCardContainer from './components/FilmCard/FilmCardContainer';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SearchPageContainer from './components/SearchPage/SearchPageContainer';
import LocalSorage from "./components/LocalStorage/LocalStorage";
import React from 'react';


class App extends React.Component {
  render () {
    return <BrowserRouter>
      <div>
        <Header/>
        <div className={style.appContainer}>
          <LocalSorage/>
          <div className={style.container}>
            <Switch>
              <Route exact path="/" component={MainPageContainer}/>
              <Route path="/film/:id" component={FilmCardContainer}/>
              <Route path="/search" component={SearchPageContainer}/>
            </Switch>  
          </div>
        </div>
      </div>
    </BrowserRouter>
  }
}

export default App;
