
import ReactDOM from 'react-dom/client';
import Routers from '@routers/Routers';
import { RouterProvider } from 'react-router-dom';
import theme from '@styles/theme';
import GlobalStyle from '@styles/globalStyle';
import { ThemeProvider } from 'styled-components';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <RouterProvider router={Routers} />
  </ThemeProvider>
);
