import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import { deepPurple } from '@mui/material/colors';
import NavigationBar from './components/NavigationBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from 'react-query';

export const queryClient = new QueryClient();

const theme = createTheme({
  palette: {
    primary: {
      main: deepPurple[500],
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <NavigationBar />
          <Routes />
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
export default App;
