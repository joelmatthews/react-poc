import { useActionData } from "react-router-dom";

import Login from "../components/Login";
import PageContent from "../components/PageContent";

const HomePage = () => {
  const data = useActionData();

  console.log(data);

  return (
    <div>
      <PageContent title={"This is a demo application"}>
        <Login />
        {data && <h4 style={{color: 'red'}}>{data}</h4>}
      </PageContent>
    </div>
  );
};

export default HomePage;
