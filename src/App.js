import logo from './logo.svg';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import { DashboardFilter, DashboardPagination } from "./containers";
import './App.scss';

const App = () => {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="App-section">
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <DashboardFilter />
            </Route>
            <Route path="/paginate">
              <DashboardPagination />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
