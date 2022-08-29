import './style/app.scss';

import StickyNav from './components/StickyNav/StickyNav.js';
import { Outlet } from 'react-router-dom';

const App = () => {
    return (
        <div className='App'>
            <StickyNav/>
            <Outlet/>
        </div>
    );
} 

export default App;