import { Outlet } from 'react-router-dom'; 

import MainNavigation from "../components/MainNavigation";

const RootLayout = () => {
    return (
        <>
            <MainNavigation />
            <main style={{flexGrow: '1'}}>
                <Outlet />
            </main>
        
        </>
    )
};

export default RootLayout;