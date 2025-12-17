import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Routes';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Toaster />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;

// https://www.figma.com/design/C3ofy4wJ68IAQXnYyHxYx5/To-do-List-Web-App-Design--Community-?node-id=442-891&t=SkU0kMfi6CbFKoe8-0
