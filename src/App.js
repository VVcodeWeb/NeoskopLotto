import React from 'react';
import './App.scss';
import Desk from "./components/Desk"
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#380F4C'
    },
    primary: {
      main: '#11cb5f'
    }
  }
});
function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="app">
        <div className="app__desk_container">
          <Desk />
        </div>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
