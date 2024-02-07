import logo from './logo.svg';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';
import {Grid} from '@mui/material'
import Dashboard from './Components/Dashboard/Dashboard';
function App() {
  return (
    <Grid container className="App" sx={{bgcolor:"#e8edff"}} >
      <Dashboard/>
    </Grid>
  );
}

export default App;
