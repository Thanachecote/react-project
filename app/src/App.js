import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RouteMain from './components/routes/RoutePath'

function App() {
  return (
    <Router>
      <RouteMain/>
    </Router>
  );
}

export default App;
