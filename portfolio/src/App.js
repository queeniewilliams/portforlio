import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import Introduction from './components/Introduction'
import About from './components/About'
import Projects from './components/Projects'
import FinCloud from './components/FinCloud'
import RushHour from './components/RushHour'
import NFTy from './components/NFTy'
import Ding from './components/Ding'
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
          <Route path="/projects/rushhour" component={RushHour} />
          <Route path="/projects/ding" component={Ding} />
          <Route path="/projects/nfty" component={NFTy} />
        </Switch>
      </div>
    )
  }
}

export default App
