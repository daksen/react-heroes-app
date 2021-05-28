import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Navbar } from '../components/ui/NavBar';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';

export const DashboardRoutes = () => {
  return (
    <>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/marvel">
            <MarvelScreen />
          </Route>
          <Route exact path="/dc">
            <DcScreen />
          </Route>
          <Route exact path="/search">
            <SearchScreen />
          </Route>
          <Route exact path="/hero/:id">
            <HeroScreen />
          </Route>
          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  )
}
