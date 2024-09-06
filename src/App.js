import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./routes/HomeCoin";
import DetailCoin from "./routes/DetailCoin";
import HomeCoin from "./routes/HomeCoin";
import Posting from "./routes/Posting.js";
import Contact from "./routes/Contact.js";
import Layout from "./components/Layout";
import ChatbotIntegration from "./components/ChatBot.js";
import DatePickerValue from './components/DatePickerValue'; // DatePicker import
import CoinMuiGrid from './routes/CoinMuiGrid.js';
import CollectionArea from './routes/CollectionArea.js';

function App() {
  return (

    <Router>
      <Layout>

        <Switch>
          <Route path="/hello">
            <h1>Hello</h1>
          </Route>
          <Route path="/DetailCoin/:id">
            <DetailCoin />
          </Route>
          <Route exact path="/">
            {/* <DatePickerValue /> */}
            <HomeCoin />
          </Route>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/posting">
            <Posting />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/datepicker">
            <DatePickerValue /> {/* DatePicker 경로에 추가 */}
          </Route>
          <Route path="/collection-area">
            <CollectionArea />
          </Route>
          <Route path="/coinmuigrid">
            <CoinMuiGrid />
          </Route>
        </Switch>
    
        <ChatbotIntegration />
      </Layout>
    </Router>
  );
}

export default App;
