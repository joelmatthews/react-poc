import { Outlet, useLoaderData } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";
import TopNavigation from "../components/TopNavigation";

const RootLayout = () => {
  const token = useLoaderData();

  return (
    <>
      <TopNavigation />
      {token && <MainNavigation />}
      <main style={{ flexGrow: "1" }}>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
