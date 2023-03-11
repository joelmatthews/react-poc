import { useActionData, useRouteLoaderData } from "react-router-dom";

import Login from "../components/Login";
import PageContent from "../components/PageContent";

const HomePage = () => {
  const token = useRouteLoaderData('root');
  const data = useActionData();

  console.log(data);

  return (
    <div>
      <PageContent title={"This is a demo application"}>
        {!token && <Login />}
        {token && <p>Welcome Home!</p>}
        {data && <h4 style={{color: 'red'}}>{data}</h4>}
      </PageContent>
    </div>
  );
};

export default HomePage;
