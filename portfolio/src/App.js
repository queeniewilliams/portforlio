import './App.css'
import { Switch, Route } from 'react-router-dom'
import Introduction from './components/Introduction'

function App() {
  return (
    <div>
      <Route path="/" component={Introduction} />
    </div>
  )
}

export default App
