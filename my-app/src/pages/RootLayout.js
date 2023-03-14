import { Outlet, useLoaderData } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";
import TopNavigation from "../components/TopNavigation";

const RootLayout = () => {
  const tokens = useLoaderData();

  return (
    <>
      <TopNavigation />
      {tokens && <MainNavigation />}
      <main style={{ flexGrow: "1", backgroundColor: '#D3D3D3' }}>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
