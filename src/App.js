import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SearchCompany from './components/SearchCompany';
import SearchJob from './components/SearchJob';
import Favourites from './components/Favourites';
import { Container, Button, Row } from 'react-bootstrap';
import CompanySearchResults from './components/CompanySearchResults';
import { Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Button className="Favourite-button btn btn-dark">
        <Link
          to="/favourites"
          className="text-white"
          style={{ textDecoration: 'none' }}
        >
          Favourites
        </Link>
      </Button>
      <Button className="Favourite-button btn btn-dark">
        <Link to="/" className="text-white" style={{ textDecoration: 'none' }}>
          Search for job
        </Link>
      </Button>
      <Button className="Favourite-button btn btn-dark">
        <Link
          to="/search-company"
          className="text-white"
          style={{ textDecoration: 'none' }}
        >
          Search by Company
        </Link>
      </Button>
      <Container>
        <Row>
          <Switch>
            <Route exact path="/search-company" component={SearchCompany} />
            <Route exact path="/" component={SearchJob} />
            <Route
              path="/company-detail/:companyName"
              component={CompanySearchResults}
            />
            <Route exact path="/favourites" component={Favourites} />
          </Switch>
        </Row>
      </Container>
    </>
  );
}

export default App;
