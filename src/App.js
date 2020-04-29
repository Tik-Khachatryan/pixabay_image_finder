import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import NavBar from "./components/navBar/Navbar";
import Search from "./components/search/Search";

function App() {
    return (
        <MuiThemeProvider>
            <div>
                <NavBar/>
                <Search/>
            </div>
        </MuiThemeProvider>
    );
}

export default App;
