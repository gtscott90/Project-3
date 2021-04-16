import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from "./pages/LandingPage";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Login from "./components/LoginForm";
//import JobSearch from "./pages/JobSearch";
import SearchForm from "./components/SearchForm"
// import Form from './components/Form';
import PageContentLogin from './components/PageContent';
// import { ThemeProvider } from './contexts/ThemeContext';
import { ThemeProvider } from '@material-ui/styles'
// import Wrapper from "./components/Wrapper/index";

function App() {
  return (
<ThemeProvider>
  <Router>
    <div>
    <Wrapper>
    <Navbar />
    <Route exact path="/" component={Login} />
    <Switch>
    
    <Route exact path="/search" component={SearchForm} />
    </Switch>
    </Wrapper>
    </div>
  </Router>
</ThemeProvider>
  );
}

/* <PageContentLogin>
// <Router>
// <div>
//   <Wrapper>
//   <Navbar />
//   <Route exact path="/" component={Login} />
//   <LandingPage />
//   </Wrapper>
// </div>
// </Router>
// </PageContentLogin> */

export default App;
