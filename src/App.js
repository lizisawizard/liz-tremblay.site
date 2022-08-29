import './style/app.scss';
import { Route, Navigate } from 'react-router-dom';

import StickyNav from './components/StickyNav/StickyNav.js';
import { Outlet } from 'react-router-dom';

const App = () => {
    return (
        <div className='App'>
            <StickyNav/>
            <Outlet/>
            <Navigate to='/home'/>
        </div>
    );
} 

export default App;