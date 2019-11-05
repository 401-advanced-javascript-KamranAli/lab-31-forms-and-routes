import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import HomePage from './Container/HomePage/HomePage';
import ListPageLogic from './Container/ListPageLogic/ListPageLogic';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path ="/" component={HomePage} />
        <Route path ="/list-page" component={ListPageLogic} />
      </Switch>
      <Footer />
    </Router>
  );
}
