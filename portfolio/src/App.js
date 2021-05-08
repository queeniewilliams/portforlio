import React, { useState } from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import Introduction from './components/Introduction'
import About from './components/About'
import Projects from './components/Projects'
import FinCloud from './components/FinCloud'
import RushHour from './components/RushHour'
import NFTy from './components/NFTy'
import Ding from './components/Ding'
import Sticky from './components/Sticky'
import Navbar from './components/NavBar'
import Roulette from './components/Roulette'

const App = () => {
  const { isSticky, element } = Sticky()
  const [drawerOpen, isDrawerOpen] = useState(false)
  const drawerToggleClickHandler = () => {
    isDrawerOpen(!drawerOpen)
  }
  const backdropClickHandler = () => {
    isDrawerOpen(false)
  }
  return (
    <div>
      <Navbar
        sticky={isSticky}
        drawerToggleClickHandler={drawerToggleClickHandler}
      />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <Introduction
              {...props}
              element={element}
              drawerOpen={drawerOpen}
              isDrawerOpen={isDrawerOpen}
              drawerToggleClickHandler={drawerToggleClickHandler}
              backdropClickHandler={backdropClickHandler}
            />
          )}
        />
        <Route path="/about" component={About} />
        <Route
          exact
          path="/projects"
          render={(props) => (
            <Projects
              {...props}
              element={element}
              drawerOpen={drawerOpen}
              isDrawerOpen={isDrawerOpen}
              drawerToggleClickHandler={drawerToggleClickHandler}
              backdropClickHandler={backdropClickHandler}
            />
          )}
        />
        <Route
          path="/projects/fincloud"
          render={(props) => (
            <FinCloud
              {...props}
              element={element}
              drawerOpen={drawerOpen}
              isDrawerOpen={isDrawerOpen}
              drawerToggleClickHandler={drawerToggleClickHandler}
              backdropClickHandler={backdropClickHandler}
            />
          )}
        />
        <Route
          path="/projects/rushhour"
          render={(props) => (
            <RushHour
              {...props}
              element={element}
              drawerOpen={drawerOpen}
              isDrawerOpen={isDrawerOpen}
              drawerToggleClickHandler={drawerToggleClickHandler}
              backdropClickHandler={backdropClickHandler}
            />
          )}
        />
        <Route
          path="/projects/ding"
          render={(props) => (
            <Ding
              {...props}
              element={element}
              drawerOpen={drawerOpen}
              isDrawerOpen={isDrawerOpen}
              drawerToggleClickHandler={drawerToggleClickHandler}
              backdropClickHandler={backdropClickHandler}
            />
          )}
        />
        <Route
          path="/projects/nfty"
          render={(props) => (
            <NFTy
              {...props}
              element={element}
              drawerOpen={drawerOpen}
              isDrawerOpen={isDrawerOpen}
              drawerToggleClickHandler={drawerToggleClickHandler}
              backdropClickHandler={backdropClickHandler}
            />
          )}
        />
        <Route
          path="/projects/roulette"
          render={(props) => (
            <Roulette
              {...props}
              element={element}
              drawerOpen={drawerOpen}
              isDrawerOpen={isDrawerOpen}
              drawerToggleClickHandler={drawerToggleClickHandler}
              backdropClickHandler={backdropClickHandler}
            />
          )}
        />
      </Switch>
    </div>
  )
}

export default App
