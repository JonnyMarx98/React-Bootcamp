import React from 'react';
import logo from './logo.svg';
import Navbar from "./Navbar";
import Form from './Form';
import PageContent from './PageContent';
import {ThemeProvider} from './contexts/ThemeContext'
import {LanguageProvider} from './contexts/LanguageContext'

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <PageContent>
          <Navbar/>
          <Form />
        </PageContent>
      </ThemeProvider>
    </LanguageProvider>    
  );
}

export default App;
