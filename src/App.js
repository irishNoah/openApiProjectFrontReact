import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./routes/HomeCoin";
import DetailCoin from "./routes/DetailCoin";
import HomeCoin from "./routes/HomeCoin";
import Posting from "./routes/Posting.js";
import Contact from "./routes/Contact.js";
import Layout from "./components/Layout";
import ChatbotIntegration from "./components/ChatBot.js";
import CoinMuiGrid from './routes/CoinMuiGrid.js';
import CollectionArea from './routes/CollectionArea.js';
import GetUltraSrtNcst from './routes/GetUltraSrtNcst.js';

function App() {
  return (

    <Router>
      <Layout>

        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/hello">
            <h1>Hello</h1>
          </Route>
          <Route exact path="/">
            <HomeCoin />
          </Route>
          <Route path="/DetailCoin/:id">
            <DetailCoin />
          </Route>
          <Route path="/coinmuigrid">
            <CoinMuiGrid />
          </Route>
          <Route path="/collection-area">
            <CollectionArea />
          </Route>
          <Route path="/getUltraSrtNcst">
            <GetUltraSrtNcst />
          </Route>
          <Route path="/posting">
            <Posting />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
    
        <ChatbotIntegration />
      </Layout>
    </Router>
  );
}

export default App;
