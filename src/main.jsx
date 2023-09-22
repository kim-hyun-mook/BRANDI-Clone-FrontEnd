import ReactDOM from 'react-dom/client';
import Routers from '@routers/Routers';
import { RouterProvider } from 'react-router-dom';
import theme from '@styles/theme';
import GlobalStyle from '@styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import 'aos/dist/aos.css';
import AOS from 'aos';

// AOS 초기화
AOS.init();

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <RouterProvider router={Routers} />
  </ThemeProvider>
);
