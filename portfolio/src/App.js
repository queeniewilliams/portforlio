import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import Introduction from './components/Introduction'
import About from './components/About'
import Projects from './components/Projects'
import FinCloud from './components/FinCloud'
// import Resume from './components/Resume'

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Introduction} />
          <Route path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          {/* <Route path="/resume" component={Resume} /> */}
          <Route path="/projects/fincloud" component={FinCloud} />
        </Switch>
      </div>
    )
  }
}

export default App
