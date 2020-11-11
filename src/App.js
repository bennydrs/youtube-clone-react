import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import SearchPage from './components/SearchPage';
import RecommendedVideos from './components/RecommendedVideos';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <div className="App">
      <Router>
        <Header showSidebar={showSidebar} />
        <Switch>
          <Route path="/search/:searchTerm">
            <div className="app__page">
              <Sidebar sidebar={sidebar} />
              <div className={`content ${sidebar ? 'width' : ''}`}>
                <SearchPage />
              </div>
            </div>
          </Route>
          <Route path="/">
            <div className="app__page">
              <Sidebar sidebar={sidebar} />
              <div className={`content ${sidebar ? 'width' : ''}`}>
                <RecommendedVideos />
              </div>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
