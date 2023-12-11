import { BrowserRouter, Navigate, Route, Routes, useParams } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { muiFormatColorPalette } from './theme';
import Layout from './views/layout';
import Dashboard from './views/dashboard';
import Analytics from './views/analytics';
import Projects from './views/projects';
import AllIssues from './views/allissues';
import Login from './views/login';
import SignIn from './views/signin';

function App() {
    const theme = useSelector((state: any) => state.theme.theme);
    const muiTheme = useMemo(() => {
        return createTheme(muiFormatColorPalette(theme));
    }, [theme])
    const params = useParams();

  return (
    <ThemeProvider theme={muiTheme}>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navigate to='/login' replace/>} />
                <Route path='/login' element={<Login />}/>
                <Route path='/sign-in' element={<SignIn />}/>
                <Route element={<Layout />}>
                    <Route path='/:id/' element={<Dashboard />}/>
                    <Route path='/:id/dashboard' element={<Dashboard />}/>
                    <Route path='/:id/analytics' element={<Analytics />}/>
                    <Route path='/:id/projects' element={<Projects />}/>
                    <Route path='/:id/all-issues' element={<AllIssues />}/>
                </Route>
            </Routes>
            <CssBaseline />
        </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
