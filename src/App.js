import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./routes/HomeCoin";
import DetailCoin from "./routes/DetailCoin";
import HomeCoin from "./routes/HomeCoin";
import Posting from "./routes/Posting.js";
import Contact from "./routes/Contact.js";
import Layout from "./components/Layout";
import ChatbotIntegration from "./components/ChatBot.js";
import ScrollToTop from "./components/ScrollToTop.js";
import DatePickerValue from './components/DatePickerValue'; // DatePicker import
import PaginationCommunityNoSnap from './routes/PaginationCommunityNoSnap.js';
import CoinDataGrid from './routes/CoinDataGrid.js';
import CoinMuiGrid from './routes/CoinMuiGrid.js';


function App() {
  return (
    <Router>
      <ScrollToTop /> 
      <Header />
      <Nav />
      {/* <BasicPagination /> */}

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
          <Route path="/muigrid">
            <PaginationCommunityNoSnap />
          </Route>
          <Route path="/coinmuigrid">
            <CoinMuiGrid />
          </Route>
        </Switch>
      </Layout>

      <ChatbotIntegration />
    </Router>
  );
}

export default App;
