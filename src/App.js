import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import Header from "./components/Header";
import Home from "./views/Home";
import { MuiThemeProvider } from '@material-ui/core/styles';
import NavBar from "./components/NavBar";
import {useStyles, theme} from './Theme'

const App = () => {
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    function handleDrawerToggle() {
        setMobileOpen(!mobileOpen);
    }

    return (
        <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
            <CssBaseline/>
            <Hidden smUp implementation="css">
                <Header classes={classes} handleDrawerToggle={handleDrawerToggle}/>
            </Hidden>
            <NavBar classes={classes} handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen}  />
            <main className={classes.content}>
                <Hidden smUp implementation="css">
                    <div className={classes.toolbar}/>
                </Hidden>
                <Home/>
            </main>
        </div>
        </MuiThemeProvider>
    );
}

export default App;