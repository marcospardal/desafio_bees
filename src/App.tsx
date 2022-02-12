import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// views
import { Home } from './views';

import { theme } from './UI/theme'
import { GlobalStyle } from './UI/GlobalStyles'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
