import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Header from './components/Header'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <div className="app-container">
    <div className="responsive-container">
      <Header />

      <div className="content-container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  </div>
)

export default App
