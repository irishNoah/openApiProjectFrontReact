import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ChatbotIntegration from "./components/ChatBot.js";
import routes from './routes'; 

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          {routes.map((route, index) => (
            <Route 
              key={index} 
              path={route.path} 
              exact={route.exact} 
              component={route.component} 
            />
          ))}
        </Switch>
        <ChatbotIntegration />
      </Layout>
    </Router>
  );
}

export default App;
