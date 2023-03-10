import { Outlet } from 'react-router-dom'; 

import MainNavigation from "../components/MainNavigation";
import TopNavigation from '../components/TopNavigation';

const RootLayout = () => {
    return (
        <>
            <TopNavigation />
            <MainNavigation />
            <main style={{flexGrow: '1'}}>
                <Outlet />
            </main>
        
        </>
    )
};

export default RootLayout;