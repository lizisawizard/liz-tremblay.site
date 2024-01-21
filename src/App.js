import './style/app.scss';

import Navigation from './components/Navigation/Navigation.js';
import Footer from './components/Footer/Footer.js';
import { Outlet } from 'react-router-dom';

const App = () => {
    return (
        <div className="page-layout">
            <Navigation/>
            <Outlet/>
            <Footer></Footer>
        </div>
    );
} 

export default App;