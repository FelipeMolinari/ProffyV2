import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Routes from './routes';
import GlobalSyles from './styles/global';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

function App() {
    const [theme, setTheme] = useState(dark);
    const toggleTheme = () => {
        setTheme(theme.title === 'light' ? dark : light);
    };
    return (
        <ThemeProvider theme={theme}>
            <GlobalSyles />
            <Routes {...{ toggleTheme }} />
        </ThemeProvider>
    );
}

export default App;
