import './style/app.scss';

import StickyNav from './components/StickyNav/StickyNav.js';
import Content from './components/Content/Content.js';
import { Outlet } from 'react-router-dom';

const App = () => {
    return (
        <div className='App'>
            <StickyNav/>
            <Content/>
            <Outlet/>
        </div>
    );
} 

export default App;