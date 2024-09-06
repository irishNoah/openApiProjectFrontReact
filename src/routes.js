import Main from "./routes/HomeCoin";
import DetailCoin from "./routes/DetailCoin";
import HomeCoin from "./routes/HomeCoin";
import Posting from "./routes/Posting.js";
import Contact from "./routes/Contact.js";
import CoinMuiGrid from './routes/CoinMuiGrid.js';
import CollectionArea from './routes/CollectionArea.js';
import GetUltraSrtNcst from './routes/GetUltraSrtNcst.js';

const routes = [
  {
    path: "/",
    exact: true,
    component: Main,
  },
  {
    path: "/hello",
    exact: true,
    component: () => <h1>Hello</h1>, // 임시 컴포넌트
  },
  {
    path: "/DetailCoin/:id",
    component: DetailCoin,
  },
  {
    path: "/coinmuigrid",
    component: CoinMuiGrid,
  },
  {
    path: "/collection-area",
    component: CollectionArea,
  },
  {
    path: "/getUltraSrtNcst",
    component: GetUltraSrtNcst,
  },
  {
    path: "/posting",
    component: Posting,
  },
  {
    path: "/contact",
    component: Contact,
  },
];

export default routes;
