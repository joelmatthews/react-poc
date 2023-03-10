import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import PageContent from "../components/PageContent";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error)

  let title = "An Error Occured";
  let message = "Something went wrong";

  if (error.status === 400) {
    title = error.data.message;
    message = "bad request"
  }

  if (error.status === 401) {
    title = "Not Authorized!";
    message = "You are not authorized to view this page";
  }

  return (
    <>
      <MainNavigation />
      <main>
        <PageContent title={title}>
          <p>{message}</p>
        </PageContent>
      </main>
    </>
  );
};

export default ErrorPage;
