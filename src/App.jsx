// src/App.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Assistant from './components/Assistant';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>{t('Museu Nacional Assistant')}</h1>
          <nav>
            <Link to="/">{t('Home')}</Link>
            <Link to="/exhibitions">{t('Exhibitions')}</Link>
            <Link to="/visit">{t('Visit')}</Link>
            <Link to="/blog">{t('Blog')}</Link>
          </nav>
          <div>
            <button onClick={() => changeLanguage('en')}>EN</button>
            <button onClick={() => changeLanguage('es')}>ES</button>
            <button onClick={() => changeLanguage('ca')}>CA</button>
            <button onClick={() => changeLanguage('fr')}>FR</button>
          </div>
        </header>
        <Switch>
          <Route path="/exhibitions">
            <div>{t('Exhibitions Page')}</div>
          </Route>
          <Route path="/visit">
            <div>{t('Visit Page')}</div>
          </Route>
          <Route path="/blog">
            <div>{t('Blog Page')}</div>
          </Route>
          <Route path="/">
            <Assistant />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;