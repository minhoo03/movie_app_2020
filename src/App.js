import React from 'react';
import { HashRouter, Route } from "react-router-dom"
import About from "./routes/About"
import Home from "./routes/Home"
import Detail from "./routes/Detail"
import Navigation from "./routes/Navigation"

//exact={true} 오로지 이 주소에만 렌더링
function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movies/:id" component={Detail} />
    </HashRouter>
  )
}

export default App