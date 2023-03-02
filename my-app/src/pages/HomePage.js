import Login from "../components/Login";
import PageContent from "../components/PageContent";

const HomePage = () => {
  return (
    <div>
      <PageContent title={"Welcome Home"}>
        <p>This is a demo application</p>
        <Login />
      </PageContent>
    </div>
  );
};

export default HomePage;
