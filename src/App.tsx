import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import store from './store'

// views
import { Home, ListPage } from './views';

// theme
import { theme } from './UI/theme'
import { GlobalStyle } from './UI/GlobalStyles'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/list' element={<ListPage />}/>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
